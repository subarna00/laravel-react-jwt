import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../src/context/AuthContext";
const PrivateRoute = () => {
    const { isAuthenticated } = useAuthContext();

    return <>{!isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />}</>;
};

export default PrivateRoute;
