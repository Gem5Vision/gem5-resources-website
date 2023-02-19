import { fetchResources } from "./resources";
import clientPromise from '@/lib/mongodb';

export async function getFilters_mongodb() {
    try {
        const client = await clientPromise;
        const db = client.db('gem5-vision');
        // find unique categories
        const categories = await db.collection('resources').distinct('category');
        const architectures = await db.collection('resources').distinct('architecture');
        const gem5_versions = await db.collection('resources').distinct('gem5_version');
        return {
            category: categories,
            architecture: architectures,
            gem5_version: gem5_versions
        }
    }
    catch (err) {
        console.log(err);
    }
    return null;
}
export async function getFilters() {
    const resources = await fetchResources();
    // get unique categories from resources
    let categories = [...new Set(resources['resources'].map(resource => resource.category))];
    // get unique groups from resources and remove null values
    // let groups = [...new Set(resources['resources'].map(resource => resource.group))].filter(group => group != null);
    // get unique architectures from resources
    let architectures = [...new Set(resources['resources'].map(resource => resource.architecture))];
    // get zipped from resources
    // let zippeds = [...new Set(resources['resources'].map(resource => String(resource.is_zipped)))].filter(zipped => zipped != "null");
    // get gem5_version from resources
    let gem5_versions = [...new Set(resources['resources'].map(resource => resource.gem5_version))].filter(gem5_version => gem5_version != null);
    return {
        category: categories,
        // group: groups,
        architecture: architectures,
        // is_zipped : zippeds,
        gem5_version: gem5_versions
    };
}

export default async function handler(req, res) {
    let results = await getFilters_mongodb();
    res.status(200).json(results);
}
