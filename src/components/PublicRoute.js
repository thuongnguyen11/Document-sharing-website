import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from '../hooks/useAuth';
import { useLocation } from "react-router-dom"

function PublicRoute({ children }) {
    const { user } = useAuth();
    const location = useLocation();

    const hiddenRoutes = ['/sign-in', '/sign-up'];

    if (user && hiddenRoutes.includes(location.pathname)) {
        return <Navigate to="/home" replace />;
    }

    return children;
}

export default PublicRoute;
