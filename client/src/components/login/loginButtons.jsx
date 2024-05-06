import React from "react";

const LoginButtons = ({ isRegister, setIsRegister }) => {
  function setReg() {
    setIsRegister((prevRegister) => !prevRegister);
  }
  return (
    <div className="flex flex-col w-1/2">
      {isRegister ? (
        <>
          <button className="rounded roundex-xl p-2 bg-white mb-7">
            Register
          </button>
          <div className="w-full border-b mb-7"></div>
          <button
            onClick={setReg}
            className="bg-blue-400 rounded roundex-xl p-2 w-full md:w-1/2 self-center"
          >
            Back to Login
          </button>
        </>
      ) : (
        <>
          <button className="rounded roundex-xl p-2 bg-white mb-7">
            Login
          </button>
          <div className="w-full border-b mb-7"></div>
          <button
            onClick={setReg}
            className="rounded roundex-xl p-2 bg-blue-400 w-full md:w-1/2 self-center"
          >
            Register
          </button>
        </>
      )}
    </div>
  );
};

export default LoginButtons;
