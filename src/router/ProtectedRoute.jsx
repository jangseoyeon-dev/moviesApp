import React from "react";
import useAuthStore from "../store/useAuthStore";
import { Outlet, Navigate } from "react-router";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
