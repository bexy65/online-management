import { useContext, useState, useEffect } from "react";
import axios from "axios";
import LoginButtons from "./loginButtons";
import { LoginContext } from "./loginContext";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";

const LoginForm = () => {
  const {
    isRegister,
    setIsRegister,
    username,
    password,
    email,
    updateUsername,
    updatePassword,
    updateEmail,
  } = useContext(LoginContext);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const notifyToast = (err) =>
    toast(err, { duration: 4000, position: "top-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    if (password.length < 8) {
      console.error("Password must be at least 8 characters long");
      setIsSubmitting(false);
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
        notifyToast(response.data.message);
        setIsRegister(false);
      } else {
        notifyToast(response.data.message);
      }
    } catch (error) {
      notifyToast(error.response.data.message);
    } finally {
      setIsSubmitting(false);
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
            label="Username"
            type="text"
            margin="normal"
            className="w-full"
            value={username}
            onChange={(e) => updateUsername(e.target.value)}
          />
        )}
        <TextField
          label="Email"
          type="email"
          margin="normal"
          className="w-full"
          value={email}
          onChange={(e) => updateEmail(e.target.value)}
        />
        <TextField
          label="Password"
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
          disabled={isSubmitting}
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
