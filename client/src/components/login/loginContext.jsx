import React, { createContext, useState, useEffect } from "react";

const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isAuth, setIsAuth] = useState(() => {
    const storedToken = localStorage.getItem("token");
    return storedToken ? true : null;
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

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
        isAuth,
        setIsAuth,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginContextProvider };
