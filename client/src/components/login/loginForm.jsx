import React, { useContext } from "react";
import LoginButtons from "./loginButtons";
import { LoginContext } from "./loginContext";

const LoginForm = () => {
  const { isRegister, setIsRegister } = useContext(LoginContext);

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-2xl mb-10">{isRegister ? "Register" : "Login"}</h1>
      <form action="" className="flex flex-col p-2 w-full md:w-1/2">
        <div className="flex flex-col items-center mb-3">
          <p className="text-xl self-start">Username</p>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 outline-none rounded"
          />
        </div>
        <div className="flex flex-col items-center mb-3">
          <p className="text-xl self-start">Password</p>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 outline-none rounded"
          />
        </div>
      </form>
      <LoginButtons isRegister={isRegister} setIsRegister={setIsRegister} />
    </div>
  );
};

export default LoginForm;
