"use server";
import mongoose from "mongoose";

const MoneyTransferTransactionsSchema = new mongoose.Schema(
  {
    TransactionNo: { type: String, required: true },
    SenderMobile: { type: String },
    SenderName: { type: String },
    BeneName: { type: String },
    AccountNo: { type: String },
    IFSC: { type: String },
    Amount: { type: Number },
    Charges: { type: Number },
    Commission: { type: Number },
    TransType: { type: String },
    UTRNo: { type: String },
    Status: { type: String },
    Message: { type: String },
    CreatedDate: { type: String },
    PostedDate: { type: String },
  },
  { timestamps: true }
);


export const MoneyTransferTransactionsSlidebar =
  mongoose.models.MoneyTransferTransactionsSlidebar ||
  mongoose.model(
    "MoneyTransferTransactionsSlidebar",
    MoneyTransferTransactionsSchema,
    "MoneyTransferTransactionsSlidebar"  
  );
