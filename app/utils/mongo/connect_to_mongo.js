import mongoose from "mongoose";

export async function connect_to_mongo() {
    console.log("entered function")
    const mongoURL = process.env.MONGO_URL
    console.log(mongoURL)

    await mongoose.connect(`${mongoURL}`)
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.error('MongoDB connection error:', err));
}