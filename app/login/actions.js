"use server"

import bcrypt from "bcryptjs"
import { user } from "../utils/mongo/mongo_schema.js"
import { connect_to_mongo } from "../utils/mongo/connect_to_mongo.js"

await connect_to_mongo()

export async function loginUser({ phone, password }) {

    try {
        const existingUser = await user.findOne({ phone: phone })
        if (!existingUser) {
            return ({ status: 404, message: "user not found" })
        }

        const isVerified = await bcrypt.compare(password, existingUser.password)

        return isVerified
            ? ({ status: 200, message: "target user found", data: existingUser })
            : ({ status: 400, message: "target user not found" })

    } catch (error) {
        return ({ status: 500, message: "external server error" })
    }
}

export async function signupUser({ }) {

}