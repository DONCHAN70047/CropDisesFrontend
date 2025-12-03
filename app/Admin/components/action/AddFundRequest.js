"use server";

import { connect_to_mongo } from "@/app/utils/mongo/connect_to_mongo.js";
import { AddFundRequest } from "@/app/utils/mongo/AddFundRequestScema.js";

export async function AddFundInsertAction(formData) {
  await connect_to_mongo();

  try {
    const file = formData.get("UploadReceipt");

  
    let base64Image = "";
    if (file && typeof file.arrayBuffer === "function") {
      const buffer = Buffer.from(await file.arrayBuffer());
      base64Image = buffer.toString("base64");
    }

    
    const newData = {
      PaymentType: formData.get("PaymentType"),
      PaymentDate: formData.get("PaymentDate"),
      BankAccount: formData.get("BankAccount"),
      UploadReceipt: base64Image,  
      EnterAmount: formData.get("EnterAmount"),
      BankNarration: formData.get("BankNarration"),
    };

    
    const savedData = await AddFundRequest.create(newData);

    return {
      status: 200,
      message: "Data inserted successfully",
      data: savedData,
    };
  } catch (error) {
    console.log("INSERT ERROR:", error);
    return {
      status: 500,
      message: "Server Error",
    };
  }
}
