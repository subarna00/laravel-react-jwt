import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        <div>
            HomePage
            <Link to="/dashboard">Dashboard</Link>
        </div>
    );
};
