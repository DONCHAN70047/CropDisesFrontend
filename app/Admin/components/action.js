"use server"

import { transaction } from "../utils/mongo/transaction_schema.js"
import { connect_to_mongo } from "../utils/mongo/connect_to_mongo.js"

await connect_to_mongo()

/**

 * @param {Object} data 
 */
export async function insertTransaction(data) {
  try {
    const newTransaction = await transaction.create({
      TransactionNo: data.TransactionNo,
      SenderMobile: data.SenderMobile,
      SenderName: data.SenderName,
      BeneName: data.BeneName,
      AccountNo: data.AccountNo,
      IFSC: data.IFSC,
      Amount: data.Amount,
      Charges: data.Charges,
      Commission: data.Commission,
      TransType: data.TransType,
      UTRNo: data.UTRNo,
      Status: data.Status,
      Message: data.Message,
      CreatedDate: data.CreatedDate || new Date(),
      PostedDate: data.PostedDate || new Date(),
    })

    return {
      status: 200,
      message: "Transaction inserted successfully",
      data: newTransaction
    }

  } catch (error) {
    console.error("Transaction insert error:", error)
    return {
      status: 500,
      message: "Error inserting transaction",
      error: error.message
    }
  }
}
