"use server"

import { user } from "../api/mongo/mongo_schema"
import bcrypt from "bcryptjs"

export async function loginUser({ phone, password }) {

    // const salt = await bcrypt.genSalt(12);
    // const hash = await bcrypt.hash(password, salt);

    try {
        const existingUser = await user.findOne({ phone: phone })
        if (!existingUser) {
            return ({status: 404, message: "user not found"})
        } 

        const isVerified = await bcrypt.compare(password, existingUser.password)

        return isVerified 
        ?   ({status: 200, message: "target user found", data: existingUser})
        :   ({status: 400, message: "target user not found"})

    } catch (error) {
        return ({status: 500, message: "external server error"})
    }
}

export async function signupUser({  }) {

}