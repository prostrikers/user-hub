import { Navigate, Outlet } from "react-router-dom";
import { getAuthToken } from "../helpers/token";

export const ProtectedLayout = () => {
  const token = getAuthToken();

  return <Outlet />;
};
