import mongoose from "mongoose";

const user_schema = new mongoose.Schema({
    name: { type: String, required: true },
    id: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: {type: String, required: true}
});

export const user = mongoose.models["user"] || mongoose.model("user", user_schema);