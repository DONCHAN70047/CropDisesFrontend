"use server";
import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    access: { type: String, required: true },
    refresh: { type: String, required: true },
    access_expiry: { type: String },
    refresh_expiry: { type: String },
  },
  { timestamps: true }
);

export const user =
  mongoose.models.user || mongoose.model("user", userSchema);




