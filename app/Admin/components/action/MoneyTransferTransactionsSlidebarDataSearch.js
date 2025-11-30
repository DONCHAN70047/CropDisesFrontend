"use server";

import { connect_to_mongo } from "@/app/utils/mongo/connect_to_mongo.js";
import { MoneyTransferTransactionsSlidebar } from "@/app/utils/mongo/MoneyTransferTransactionsSlidebarDataSearchSchema.js";

export async function DataSearchMoneyTransfer({ transactionNo, status, type, startDate, endDate }) {
  await connect_to_mongo();

  try {
    const filter = {};

    if (transactionNo) filter.TransactionNo = transactionNo;
    if (status) filter.Status = status.toUpperCase();          
    if (type) filter.TransType = type;

    console.log(transactionNo)
    console.log(filter)

    // if (startDate && endDate) {
    //   filter.CreatedDate = { $gte: startDate, $lte: endDate };
    // }

    const data = await MoneyTransferTransactionsSlidebar.find(filter);

    console.log("DATA FOUND:", data);

    return {
      status: 200,
      data,
    };
  } catch (error) {
    console.log("SERVER ERROR:", error);
    return {
      status: 500,
      message: "Server Error",
    };
  }
}
