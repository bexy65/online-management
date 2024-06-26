import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginButtons from "./loginButtons";
import { LoginContext } from "./loginContext";
import { Button, TextField } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";

const LoginForm = () => {
  const {
    setIsAuth,
    isRegister,
    setIsRegister,
    username,
    password,
    email,
    updateUsername,
    updatePassword,
    updateEmail,
  } = useContext(LoginContext);

  const navigate = useNavigate();

  const notifyToast = (err) =>
    toast(err, { duration: 4000, position: "top-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 8) {
      notifyToast("Password must be at least 8 characters long");
      return;
    }

    try {
      let response;
      if (isRegister) {
        response = await axios.post("http://localhost:3000/api/register", {
          username,
          password,
          email,
        });
      } else {
        response = await axios.post("http://localhost:3000/api/login", {
          email,
          password,
        });
      }

      if (response.status === 200 || response.status === 201) {
        const token = response.data.token;
        if (token) {
          localStorage.setItem("token", token);
          setIsAuth(true);
          setIsRegister(false);
          navigate("/");
        }
      } else {
        notifyToast(response.data.message);
      }
    } catch (error) {
      notifyToast(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-2xl mb-10">{isRegister ? "Register" : "Login"}</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-2 w-full md:w-1/2 mb-7"
      >
        {isRegister && (
          <TextField
            placeholder="Username"
            type="text"
            margin="normal"
            className="w-full"
            value={username}
            onChange={(e) => updateUsername(e.target.value)}
          />
        )}
        <TextField
          placeholder="Email"
          type="email"
          margin="normal"
          className="w-full"
          value={email}
          onChange={(e) => updateEmail(e.target.value)}
        />
        <TextField
          placeholder="Password"
          type="password"
          className="w-full"
          margin="normal"
          value={password}
          onChange={(e) => updatePassword(e.target.value)}
        />
        <Button
          color="primary"
          variant="contained"
          type="submit"
          className="w-full md:w-1/2 self-center"
        >
          {isRegister ? "Register" : "Login"}
        </Button>
      </form>
      <LoginButtons />
      <Toaster />
    </div>
  );
};

export default LoginForm;
