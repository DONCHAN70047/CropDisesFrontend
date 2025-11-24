"use client";

import React, { Suspense } from "react";
import AdminDashboard from "./Client";
import { useUserContext } from "@/app/utils/context/user_context";



export default function Page() {
  const { user } = useUserContext();
  const fullName = `${user.firstName || ""} ${user.lastName || ""}`.trim();


  return (
    <Suspense fallback={<div>Loading......</div>}>
      <AdminDashboard adminName={fullName || "Admin"} />
    </Suspense>
  );
}
