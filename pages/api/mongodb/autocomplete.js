import getToken from "./getToken";

/**
 * @helper
 * @async
 * @description Fetches the resources based on the query object from the MongoDB database.
 * @param {json} queryObject The query object.
 * @param {json} filters The filters object.
 * @returns {JSX.Element} The JSX element to be rendered.
 */
export default async function Autocomplete(query, pageSize) {
  const dbKey = Object.keys(process.env.PRIVATE_RESOURCES)[0];
  const access_token = await getToken(dbKey);
  const database = process.env.PRIVATE_RESOURCES[dbKey];

  const res = await fetch(`${database.url}/action/aggregate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      Authorization: "Bearer " + access_token,
    },
    // also apply filters on
    body: JSON.stringify({
      dataSource: database.dataSource,
      database: database.database,
      collection: database.collection,
      pipeline: [
        {
          $search: {
            index: "default",
            autocomplete: {
              query: query,
              path: "id",
              tokenOrder: "any",
              fuzzy: {
                prefixLength: 2,
              },
            },
          },
        },
        {
          $group: {
            _id: "$id",
            id: { $first: "$id" },
          },
        },
        {
          $limit: pageSize,
        },
      ],
    }),
  }).catch((err) => console.log(err));

  let resources = await res.json();
  return resources["documents"];
}
