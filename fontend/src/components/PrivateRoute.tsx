// src/components/PrivateRoute.tsx
import type { JSX } from "react";
import { Navigate } from "react-router-dom";

    const PrivateRoute = ({ children }: { children: JSX.Element }) => {
        const token = localStorage.getItem("token");
        return token ? children : <Navigate to="/loginPage" replace />;
    };

export default PrivateRoute;
