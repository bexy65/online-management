import React, { useContext } from "react";
import LoginForm from "../components/login/loginForm";
import { LoginContext } from "../components/login/loginContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { isAuth } = useContext(LoginContext);
  return isAuth ? <Navigate to="/" /> : <LoginForm />;
};

export default Login;
