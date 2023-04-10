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
  const access_token = await getToken();

  const res = await fetch(`${process.env.MONGODB_URI}/action/aggregate`, {
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
      collection: process.env.COLLECTION,
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
      ],
    }),
  }).catch((err) => console.log(err));
  let resources = await res.json();
  return resources["documents"].slice(0, pageSize);
}
