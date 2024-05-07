import { useContext } from "react";
import { LoginContext } from "./loginContext";
import { Button } from "@mui/material";

const LoginButtons = () => {
  const { isRegister, setIsRegister } = useContext(LoginContext);
  function setReg() {
    setIsRegister((prevRegister) => !prevRegister);
  }
  return (
    <div className="flex flex-col w-1/2">
      <div className="w-full border-b border-black mb-7"></div>
      <Button
        variant="outlined"
        color="secondary"
        onClick={setReg}
        className="w-full md:w-1/2 self-center"
      >
        {isRegister ? "Back" : "Register"}
      </Button>
    </div>
  );
};

export default LoginButtons;
