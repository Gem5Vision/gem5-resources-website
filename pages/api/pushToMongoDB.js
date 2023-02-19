import clientPromise from '@/lib/mongodb';
import { fetchResources } from './resources';

export default async function handler(req, res) {
    try {
        let resources = await fetchResources();
        resources = resources['resources'];
        const client = await clientPromise;
        const db = client.db('gem5-vision');
        const collection = db.collection('resources');
        // push resources to mongodb
        await collection.insertMany(resources);
        return res.status(200).json(resources);
    }
    catch (err) {
        console.log(err);
    }
    res.status(200).json({ name: 'John Doe' });
}