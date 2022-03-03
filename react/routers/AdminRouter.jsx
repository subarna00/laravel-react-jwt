import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../src/pages/Admin/Dashboard";
import Layout from "../src/pages/Admin/Layout";
import Login from "../src/pages/Login";
import { PrivateRouteAdmin } from "./PrivateRoute";
export const AdminRouter = () => {
    return (
        <>
            <Routes>
                <Route element={<PrivateRouteAdmin />}>
                    <Route path="/dashboard" element={<Layout />}>
                        <Route index element={<Dashboard />} />
                    </Route>
                </Route>
            </Routes>
        </>
    );
};
