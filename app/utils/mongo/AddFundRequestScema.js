"use server";
import mongoose from "mongoose";

const AddFundRequestSchema = new mongoose.Schema(
  {
    PaymentType: { type: String },
    PaymentDate: { type: String },
    BankAccount: { type: String },
    UploadReceipt: { type: String },  
    EnterAmount: { type: String },
    BankNarration: { type: String },
  },
  { timestamps: true }
);

export const AddFundRequest =
  mongoose.models.AddFundRequest ||
  mongoose.model("AddFundRequest", AddFundRequestSchema);
