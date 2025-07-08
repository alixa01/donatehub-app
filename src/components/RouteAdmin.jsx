import { useAuth } from "@/context/AuthContext";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const RouteAdmin = () => {
  const { user } = useAuth();
  if (user?.role === "ADMIN") {
    return <Outlet />;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default RouteAdmin;
