import clientPromise from "@/lib/mongodb";

export async function fetchResourcesMongoDB() {
  try {
    const client = await clientPromise;
    const db = client.db("gem5-vision");
    const collection = db.collection("resources");
    var res = await collection.find().then((res) => res.json());
    return res;
  } catch (error) {
    console.log(err);
  }
}

export async function fetchResources() {
  return fetch(
    "https://raw.githubusercontent.com/Gem5Vision/json-to-mongodb/main/resources.json"
  ).then((res) => res.json());
}

export default async function handler(req, res) {
  const resources = await fetchResourcesMongoDB();

  res.status(200).json(resources);
}
