"use server"

import { connect_to_mongo } from "../utils/mongo/connect_to_mongo"
import { user } from "../utils/mongo/mongo_schema"
import bcrypt from "bcryptjs"
import { createAccessToken, createRefreshToken } from "./functions"
import { cookies } from "next/headers"


export async function signUp(firstName, lastName, email, phoneNumber, password) {
    await connect_to_mongo()
    const cookieStore = await cookies()

    try {
        const target_user = await user.findOne({ phone: phoneNumber })

        console.log(target_user)

        if (target_user) {
            console.log("user exists")
            return ({ status: 208, message: "user exists" })
        }

        // HASH PASSWORD
        const salt = await bcrypt.genSalt(12);
        const hashed_password = await bcrypt.hash(password, salt);

        const payload = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phoneNumber,
            password: hashed_password
        }

        console.log("payload ", payload)

        const access_token = createAccessToken(payload)
        const refresh_token = createRefreshToken(payload)

        const new_user = new user({
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phoneNumber,
            password: hashed_password,
            access: access_token,
            refresh: refresh_token
        })

        console.log("new user ", new_user)

        if (new_user) {
            await new_user.save()
            console.log("saved")
        } else {
            return ({status: 400, message: "User validation failed"})
        }

        cookieStore.set('refresh', refresh_token, {
          maxAge: 30 * 24 * 60 * 60 * 1000,
          httpOnly: true,
          secure: process.env.SECURE
        })

        return ({status: 201, message: "New user created", data: {
            firstName: new_user.first_name,
            lastName: new_user.last_name,
            email: new_user.email,
            phone: new_user.phone,
            access: new_user.access,
            userId: new_user._id.toString()
        }})

    } catch (error) {
        return ({status: 500, message: "Internal server error at sign up"})
    }
}