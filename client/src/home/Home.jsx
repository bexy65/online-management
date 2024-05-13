import { Button } from "@mui/material";
import { LoginContext } from "../components/login/loginContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { setIsAuth } = useContext(LoginContext);
  const navigate = useNavigate();

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <div>
        <Button variant="contained" onClick={logout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Home;
