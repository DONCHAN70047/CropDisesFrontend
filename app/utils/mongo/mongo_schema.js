import mongoose from "mongoose";


const user_schema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    access: { type: String, required: true },
    refresh: { type: String, required: true },
    access_expiry: { type: String, required: false },
    refresh_expiry: { type: String, required: false },
});


const transaction_schema = new mongoose.Schema({
    TransactionNo: { type: String, required: true },
    SenderMobile: { type: String, required: true },
    SenderName: { type: String, required: true },
    BeneName: { type: String, required: true },
    AccountNo: { type: String, required: true },
    IFSC: { type: String, required: true },
    Amount: { type: Number, required: true },
    Charges: { type: Number, required: true },
    Commission: { type: Number, required: true },
    TransType: { type: String, required: true },
    UTRNo: { type: String, required: true },
    Status: { type: String, required: true },
    Message: { type: String, required: true },
    CreatedDate: { type: Date, required: true },
    PostedDate: { type: Date, required: true },
});

    
export const user =
  mongoose.models["user"] || mongoose.model("user", user_schema);

export const transaction =
  mongoose.models["transaction"] ||
  mongoose.model("transaction", transaction_schema);
