"use server"

import bcrypt from "bcryptjs"
import { cookies } from "next/headers.js"
import { user } from "../utils/mongo/mongo_schema.js"
import { connect_to_mongo } from "../utils/mongo/connect_to_mongo.js"
import { createAccessToken, createRefreshToken } from "../AdminSignUpFormPageLogin/functions.js"

await connect_to_mongo()

export async function loginUser({ phone, password }) {

    const cookieStore = await cookies()

    try {
        const existingUser = await user.findOne({ phone: phone })
        console.log(phone, password)

        if (!existingUser) {
            return ({ status: 404, message: "user not found" })
        }

        const isVerified = await bcrypt.compare(password, existingUser.password)

        const payload = {
            firstName: existingUser.first_name,
            lastName: existingUser.last_name,
            email: existingUser.email,
            phone: existingUser.phone,
            userId: existingUser._id.toString()
        }

        // create new tokens
        const new_access = createAccessToken(payload);
        const new_refresh = createRefreshToken(payload);

        // reset refresh token
        cookieStore.delete('refresh')
        cookieStore.set('refresh', new_refresh, {
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.SECURE,
            maxAge: 60 * 24 * 60 * 60, // 60 days
        })

        return isVerified
            ? ({
                status: 200, message: "target user found", data: {
                    firstName: existingUser.first_name,
                    lastName: existingUser.last_name,
                    email: existingUser.email,
                    phone: existingUser.phone,
                    access: new_access,
                    userId: existingUser._id.toString()
                }
            })
            : ({ status: 400, message: "target user not found" })

    } catch (error) {
        return ({ status: 500, message: "external server error" })
    }
}