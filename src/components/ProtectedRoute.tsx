import  { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/IsAithenticated";


interface ProtectedRouteProps {
  children: ReactNode; 
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
