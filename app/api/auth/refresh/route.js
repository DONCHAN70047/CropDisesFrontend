import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";


export async function GET(request) {
    try {
        const refresh = request.cookies.get("refreshToken")?.value;
        if (!refresh) return NextResponse.json({ error: "No refresh token" }, { status: 401 });


        const payload = jwt.verify(refresh, process.env.REFRESH_TOKEN_SECRET);
        const newAccess = jwt.sign({ userId: payload.userId }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "24h",
            algorithm: "HS384",
        });


        const res = NextResponse.json({ accessToken: newAccess });
        res.cookies.set("accessToken", newAccess, {
            httpOnly: true,
            sameSite: "strict",
            secure: true,
            maxAge: 60 * 60 * 24,
        });


        return res;
    } catch (err) {
        return NextResponse.json({ error: "Invalid refresh token" }, { status: 401 });
    }
}