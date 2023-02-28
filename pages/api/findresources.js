import { fetchResources } from "./resources";
import getToken from "./getToken";

function getSort(sort) {
  switch (sort) {
    case "date":
      return { date: -1 };
    case "name":
      return { id: 1 };
    case "version":
      return { ver_latest: -1 };
    case "id_asc":
      return { id: 1 };
    case "id_desc":
      return { id: -1 };
    case "default":
      return {
        _id: -1,
      };
    default:
      return {
        score: { $meta: "textScore" },
      };
  }
}

/**
 * @helper
 * @async
 * @description Fetches the resources based on the query object from the MongoDB database.
 * @param {json} queryObject The query object.
 * @param {json} filters The filters object.
 * @returns {JSX.Element} The JSX element to be rendered.
 */
async function getResourcesMongoDB(queryObject, currentPage, pageSize) {
  let resources = [];
  const access_token = await getToken();
  if (queryObject.query.trim() === "") {
    if (queryObject.sort === "relevance") {
      queryObject.sort = "default";
    }
  }
  let pipeline = [];
  if (queryObject.tag) {
    pipeline = pipeline.concat([
      {
        $unwind: "$tags",
      },
      {
        $match: {
          tags: {
            $in: queryObject.tag || [],
          },
        },
      },
      {
        $group: {
          _id: "$_id",
          doc: {
            $first: "$$ROOT",
          },
        },
      },
      {
        $replaceRoot: {
          newRoot: "$doc",
        },
      },
    ]);
  }
  pipeline = pipeline.concat([
    {
      $addFields: {
        a: "$versions.version",
        ver_latest: {
          $last: "$versions.version",
        },
      },
    },
  ]);
  let match = [];
  if (queryObject.category) {
    match.push({ category: { $in: queryObject.category || [] } });
  }
  if (queryObject.architecture) {
    match.push({ architecture: { $in: queryObject.architecture || [] } });
  }
  if (queryObject.versions) {
    match.push({ "versions.version": { $in: queryObject.versions || [] } });
  }
  if (match.length > 0) {
    pipeline.push({
      $match: {
        $and: match,
      },
    });
  }
  pipeline = pipeline.concat([
    {
      $sort: getSort(queryObject.sort),
    },
    {
      $unset: ["a", "ver_latest"],
    },
    {
      $setWindowFields: { output: { totalCount: { $count: {} } } },
    },
    {
      $skip: (currentPage - 1) * pageSize,
    },
    {
      $limit: pageSize,
    },
  ]);

  if (queryObject.query.trim() !== "") {
    // find score greater than 0.5
    /* pipeline.unshift({
      $match: {
        score: {
          $gt: 0.5,
        },
      },
    }); */
    pipeline.unshift({
      $addFields: {
        "highlights": {
          "$meta": "searchHighlights"
        }
      }
    });
    pipeline.unshift({
      $search: {
        text: {
          query: queryObject.query,
          path: ["id", "description", "resources", "tags"],
          fuzzy: {
            maxEdits: 2,
            maxExpansions: 100,
          },
        },
        highlight: {
          "path": ["id", "description"]
        }
      },
    });
  }
  console.log(pipeline);
  const res = await fetch(
    "https://us-west-2.aws.data.mongodb-api.com/app/data-ejhjf/endpoint/data/v1/action/aggregate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'api-key': 'pKkhRJGJaQ3NdJyDt69u4GPGQTDUIhHlx4a3lrKUNx2hxuc8uba8NrP3IVRvlzlo',
        "Access-Control-Request-Headers": "*",
        // 'origin': 'https://gem5vision.github.io',
        Authorization: "Bearer " + access_token,
      },
      // also apply filters on
      body: JSON.stringify({
        dataSource: "gem5-vision",
        database: "gem5-vision",
        collection: "resources",
        pipeline: pipeline,
      }),
    }
  ).catch((err) => console.log(err));
  resources = await res.json();
  console.log(resources["documents"]);
  return [
    resources["documents"],
    resources["documents"].length > 0
      ? resources["documents"][0].totalCount
      : 0,
  ];
}

/**
 * @helper
 * @async
 * @description Fetches the resources based on the query object from the JSON file.
 * @param {json} queryObject The query object.
 * @returns {JSX.Element} The JSX element to be rendered.
 */
async function getResourcesJSON(queryObject, currentPage, pageSize) {
  const resources = await fetchResources();
  const query = queryObject.query.trim();
  const keywords = query.split(" ");
  let results = resources.filter((resource) => {
    let idMatches = keywords.filter((keyword) =>
      resource.id.toLowerCase().includes(keyword.toLowerCase())
    ).length;

    let tagMatches = keywords.filter((keyword) => {
      return resource.tags ? resource.tags.includes(keyword.toLowerCase()) : false;
    }).length;
    console.log(tagMatches);

    let descMatches = keywords.filter((keyword) =>
      resource.description.toLowerCase().includes(keyword.toLowerCase())
    ).length;
    let resMatches = 0;
    if (resource.resources) {
      // only search if resource.resources exists
      const resourceJSON = JSON.stringify(resource.resources).toLowerCase();
      resMatches = keywords.filter((keyword) =>
        resourceJSON.includes(keyword.toLowerCase())
      ).length;
    }
    let totalMatches = idMatches + descMatches + resMatches + tagMatches;
    if (totalMatches === 0) {
      let idDistances = keywords.map((keyword) => {
        const keywordLower = keyword.toLowerCase();
        return Math.min(
          ...resource.id
            .toLowerCase()
            .split("-")
            .map((idPart) => damerauLevenshteinDistance(keywordLower, idPart))
        );
      });
      idMatches = idDistances.filter((d) => d < 3).length;

      // let descDistances = keywords.map(keyword => {
      //   const keywordLower = keyword.toLowerCase();
      //   return Math.min(...resource.description.toLowerCase()
      //     .split(" ")
      //     .map(descPart => damerauLevenshteinDistance(keywordLower, descPart)));
      // });
      // descMatches = descDistances.filter(d => d < 3).length;
      if (resource.resources) {
        // only search if resource.resources exists
        const resourceJSON = JSON.stringify(resource.resources).toLowerCase();
        resMatches = keywords.filter((keyword) =>
          resourceJSON.includes(keyword.toLowerCase())
        ).length;
      }
      totalMatches = idMatches + descMatches + resMatches;
    }
    resource["totalMatches"] = totalMatches;
    return totalMatches > 0;
  });
  console.log(queryObject);
  if (queryObject.sort) {
    switch (queryObject.sort) {
      case "id_asc":
        results = results.sort((a, b) => a.id.localeCompare(b.id));
        break;
      case "id_desc":
        results = results.sort((a, b) => b.id.localeCompare(a.id));
        break;
      case "date":
        results = results.sort((a, b) => a.date.localeCompare(b.date));
        break;
      case "version":
        results = results.sort((a, b) => {
          const aVersion =
            Object.keys(a.versions).length > 1
              ? Object.keys(a.versions)[1]
              : Object.keys(a.versions)[0];
          const bVersion =
            Object.keys(b.versions).length > 1
              ? Object.keys(b.versions)[1]
              : Object.keys(b.versions)[0];
          return bVersion.localeCompare(aVersion);
        });
        console.log(results);
        break;
      default:
        results = results.sort((a, b) => b.totalMatches - a.totalMatches);
    }
  } else {
    results = results.sort((a, b) => b.totalMatches - a.totalMatches);
  }
  for (let filter in queryObject) {
    if (filter === "tag") {
      results = results.filter((resource) => {
        for (let tag in queryObject[filter]) {
          if (!resource.tags) return false;
          if (resource.tags.includes(queryObject[filter][tag])) {
            return true;
          }
        }
        return false;
      });
    } else if (filter === "versions") {
      results = results.filter((resource) => {
        for (let version in queryObject[filter]) {
          // check if the version exists in the resource
          for (let resourceVersion in resource.versions) {
            if (
              resource.versions[resourceVersion]["version"] ===
              queryObject[filter][version]
            ) {
              return true;
            }
          }
        }
        return false;
      });
    } else if (filter !== "query" && filter !== "sort") {
      results = results.filter((resource) =>
        queryObject[filter].includes(String(resource[filter]))
      );
    }
  }
  const total = results.length;
  results = results.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  return [results, total];
}

/**
 * @wrapper
 * @async
 * @description Wrapper function to fetch the resources based on the query object.
 * @param {json} queryObject The query object.
 * @param {json} filters The filters to be applied.
 * @returns {json} The resources in JSON format.
 */
export async function getResources(queryObject, currentPage, pageSize) {
  let resources;
  if (process.env.IS_MONGODB_ENABLED) {
    resources = await getResourcesMongoDB(queryObject, currentPage, pageSize);
  } else {
    resources = await getResourcesJSON(queryObject, currentPage, pageSize);
  }
  let total = resources[1];
  resources = resources[0];
  // }
  return {
    resources: resources,
    total: total,
  };
}

export default async function handler(req, res) {
  // res.status(200).json(resources);
  // find the resources that contain the query in their id
  const query = req.query.q;
  let results = await getResourcesMongoDB({ query: query }, {});
  res.status(200).json(results);
}

/**
 * @helper
 * @description Calculates the Damerau-Levenshtein distance between two strings. Used for fuzzy search.
 * @returns {number} The Damerau-Levenshtein distance between the two strings.
 */
function damerauLevenshteinDistance(a, b) {
  if (a.length == 0) return b.length;
  if (b.length == 0) return a.length;
  var matrix = [];
  for (var i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (var j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (i = 1; i <= b.length; i++) {
    for (j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) == a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1, // insertion
          matrix[i - 1][j] + 1 // deletion
        );
        if (
          i > 1 &&
          j > 1 &&
          b.charAt(i - 1) == a.charAt(j - 2) &&
          b.charAt(i - 2) == a.charAt(j - 1)
        ) {
          matrix[i][j] = Math.min(
            matrix[i][j],
            matrix[i - 2][j - 2] + 1 // transposition
          );
        }
      }
    }
  }
  return matrix[b.length][a.length];
}
