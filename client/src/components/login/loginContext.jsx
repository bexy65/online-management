import React, { createContext, useState } from "react";

// Create a context object
const LoginContext = createContext();

// Create a provider component
const LoginContextProvider = ({ children }) => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <LoginContext.Provider value={{ isRegister, setIsRegister }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginContextProvider };
