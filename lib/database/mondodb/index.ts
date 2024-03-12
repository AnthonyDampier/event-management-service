import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

let cached = (global as any).mongoose || {conn: null, promise: null};

export const connectToDatabase = async () => {
    if (cached.conn) { return cached.conn;}

    if (!MONGODB_URI){throw new Error('Please define the MONGODB_URI environment variable inside .env.local');}

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'Cluster0Free',
        bufferCommands: false,
    })

    cached.conn = await cached.promise;

    return cached.conn;
};
