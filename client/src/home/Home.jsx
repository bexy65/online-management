import { Button } from "@mui/material";
import { LoginContext } from "../components/login/loginContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/layout";

const Home = () => {
  const { setIsAuth } = useContext(LoginContext);
  const navigate = useNavigate();

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Layout>
      <div>
        <div>
          <Button variant="contained" onClick={logout}>
            Logout
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
