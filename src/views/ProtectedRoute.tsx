import { useAuth } from "hooks/useAuth";
import React, { ReactNode } from "react";
import {  useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  // Add your component's props here
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // const { loading, isAuthenticated } = useSelector((state) => state.user);
  const { isLoggedIn, userData, token } = useAuth();
  console.log(isLoggedIn, userData);
  const navigate = useNavigate();

  if (!token) {
    navigate("/login");
  }
  return <>{children}</>;
};

export default ProtectedRoute;
