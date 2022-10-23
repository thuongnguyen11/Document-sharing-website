import React from "react";
import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from '../hooks/useAuth';

function PrivateRoute({ children }) {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  return children;
}

export default PrivateRoute;
