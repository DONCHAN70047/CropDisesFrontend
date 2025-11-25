"use client";

import { createContext, useState, useContext } from "react";
import axios from "axios";

export const UserContext = createContext(null);

export const useUserContext = () => {
  return useContext(UserContext);
};

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    userId: null,
    access: null,
  });

  const refreshAccessToken = async () => {
    try {
      const res = await axios.get("/api/auth/refresh", { withCredentials: true });

      if (res.data?.access) {
        setUser(res.data.data);
        return res.data.access;
      }

      return null;
    } catch (err) {
      return null;
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, refreshAccessToken }}>
      {children}
    </UserContext.Provider>
  );
}
