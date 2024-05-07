import React, { createContext, useState } from "react";

// Create a context object
const LoginContext = createContext();

// Create a provider component
const LoginContextProvider = ({ children }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const updateUsername = (value) => {
    setUsername(value);
  };

  const updatePassword = (value) => {
    setPassword(value);
  };

  const updateEmail = (value) => {
    setEmail(value);
  };

  return (
    <LoginContext.Provider
      value={{
        isRegister,
        setIsRegister,
        username,
        password,
        email,
        updateUsername,
        updatePassword,
        updateEmail,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginContextProvider };
