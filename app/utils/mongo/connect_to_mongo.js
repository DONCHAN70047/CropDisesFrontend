import mongoose from "mongoose";

export async function connect_to_mongo() {
  try {
    if (mongoose.connection.readyState === 1) {
      return;
    }

    const mongoURL = process.env.MONGO_URL;

    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}
