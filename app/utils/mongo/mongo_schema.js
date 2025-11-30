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

export const MoneyTransferTransactions =
  mongoose.models.MoneyTransferTransactions ||
  mongoose.model("MoneyTransferTransactions", MoneyTransferTransactionsSchema);
