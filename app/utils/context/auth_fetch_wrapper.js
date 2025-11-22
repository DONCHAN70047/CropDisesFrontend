"use client";
import { useContext } from "react";
import { UserContext } from "./user_context";
import axios from "axios";


export function useAuthApi() {
    const { user, refreshAccessToken } = useContext(UserContext);


    const api = axios.create({ withCredentials: true });


    api.interceptors.request.use(async (config) => {
        const hasRefresh = document.cookie.includes("refreshToken=");
        const hasAccess = user.access;

        if (hasRefresh && !hasAccess) {
            const newToken = await refreshAccessToken();
            if (newToken) config.headers["Authorization"] = `Bearer ${newToken}`;
        } else if (hasAccess) {
            config.headers["Authorization"] = `Bearer ${user.access}`;
        }


        return config;
    });


    return api;
}