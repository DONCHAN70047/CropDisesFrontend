import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";


export async function GET(request) {
    try {
        const cookieStore = await cookies();
        const refresh = cookieStore.get("refresh")?.value;
        if (!refresh) return NextResponse.json({ access: null, data: null }, { status: 200 });

        const payload = jwt.verify(refresh, process.env.REFRESH_TOKEN_SECRET);
        console.log("Payload ", payload)
        const newAccess = jwt.sign({ userId: payload.userId }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "24h",
            algorithm: "HS384",
        });


        return NextResponse.json({ access: newAccess, data: { ...payload, access: newAccess } });
    } catch (err) {
        return NextResponse.json({ access: null, data: null }, { status: 200 });
    }
}