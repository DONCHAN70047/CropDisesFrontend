import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connect_to_mongo } from "../../../utils/mongo/connect_to_mongo";
import { user } from "../../../utils/mongo/mongo_schema";


export async function GET(request) {
    try {
        const refresh = request.cookies.get("refresh")?.value;
        if (!refresh) return NextResponse.json({ error: "No refresh token" }, { status: 401 });

        const payload = jwt.verify(refresh, process.env.REFRESH_TOKEN_SECRET);
        console.log("Payload ",payload)
        const newAccess = jwt.sign({ userId: payload.userId }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "24h",
            algorithm: "HS384",
        });


        const res = NextResponse.json({ access: newAccess, data: {...payload, access: newAccess} });
        // res.cookies.set("access", newAccess, {
        //     httpOnly: true,
        //     sameSite: "strict",
        //     secure: true,
        //     maxAge: 60 * 60 * 24,
        // });


        return res;
    } catch (err) {
        return NextResponse.json({ error: "Invalid refresh token" }, { status: 401 });
    }
}