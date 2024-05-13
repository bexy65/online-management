import { Outlet, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { LoginContext } from "../components/login/loginContext";

function ProtectedRoutes() {
  const { isAuth } = useContext(LoginContext);

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
