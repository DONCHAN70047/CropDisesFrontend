import { RoyelPayoutDatabaseSearching } from "../../../actions/RoyelPayoutDatabaseSearching";

export async function POST(req) {
  try {
    const body = await req.json();
    const { account_number } = body;

    if (!account_number) {
      return Response.json({ status: 400, message: "Account number required" });
    }

    const result = await RoyelPayoutDatabaseSearching({
      AccountNo: account_number,
    });
    console.log(result)
    return Response.json(result);
  } catch (error) {
    console.error(error);
    return Response.json({ status: 500, message: "Server error" });
  }
}
