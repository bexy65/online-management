import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../components/login/loginContext";

const useAuth = () => {
  const { setIsAuth, setIsRegister } = useContext(LoginContext);
  const navigate = useNavigate();

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("token");
    navigate("/login");
  };

  const login = (token) => {
    localStorage.setItem("token", token);
    setIsRegister(false);
    setIsAuth(true);
    navigate("/");
  };

  return { login, logout };
};

export default useAuth;
