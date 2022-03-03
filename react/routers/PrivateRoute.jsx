import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../src/context/AuthContext";
export const PrivateRouteAdmin = () => {
    const { isAuthenticated } = useAuthContext();

    return <>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</>;
};

export const PrivateRoute = () => {
    const { isAuthenticated } = useAuthContext();

    return <>{!isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />}</>;
};
