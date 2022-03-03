import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../src/pages/home/HomePage";
import Login from "../src/pages/Login";
import { useAuthContext } from "../src/context/AuthContext";
import { PrivateRoute } from "./PrivateRoute";
const HomeRouter = () => {
    const { isAuthenticated } = useAuthContext();
    return (
        <>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/login" element={<Login />} />
                </Route>
            </Routes>
        </>
    );
};

export default HomeRouter;
