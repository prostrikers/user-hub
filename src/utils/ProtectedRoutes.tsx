import { Navigate } from "react-router-dom";
import { getAuthToken } from "../helpers/token";

export const ProtectedRoute = ({ children }: any) => {
  const token = getAuthToken();
  if (!token) {
    return <Navigate to="/sign-up" />;
  }

  return children;
};
