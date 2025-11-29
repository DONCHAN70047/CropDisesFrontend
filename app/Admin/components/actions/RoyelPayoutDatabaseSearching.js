import connectDB from "../config/db";
import RoyelPayout from "../models/RoyelPayout";

export async function RoyelPayoutDatabaseSearching({ AccountNo }) {
  try {
    await connectDB();

    const data = await RoyelPayout.findOne({ account_number: AccountNo });
    console.log(data)

    if (!data) {
      return { status: 404, message: "Account not found" };
    }

    return { status: 200, data };
  } catch (error) {
    console.error("DB Search Error:", error);
    return { status: 500, message: "Database error" };
  }
}
