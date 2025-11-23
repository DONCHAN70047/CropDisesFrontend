import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const adminName = localStorage.getItem("adminName");

  if (!adminName) {
    return <Navigate to="/Login" replace />;
  }

  return children;
};

export default ProtectedRoute;
