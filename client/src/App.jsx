import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/login/loginForm";
import Home from "./home/Home";
import {
  LoginContextProvider,
  LoginContext,
} from "./components/login/loginContext";
import { useContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

function App() {
  return (
    <>
      <LoginContextProvider>
        <AppRoutes />
      </LoginContextProvider>
    </>
  );
}

// const checkTokenExpiry = () => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     setIsAuth(true);
//     const decodedToken = jwtDecode(token);
//     console.log(decodedToken);
//     const currentTime = Date.now() / 1000;
//     if (decodedToken.exp < currentTime) {
//       localStorage.removeItem("token");
//       setIsAuth(false);
//     }
//   }
// };

// const intervalId = setInterval(checkTokenExpiry, 60000);

// return () => clearInterval(intervalId);
function AppRoutes() {
  const { isAuth, setIsAuth } = useContext(LoginContext);

  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem("token");
      if (token && !isAuth) {
        setIsAuth(true);
        console.log(isAuth);
      } else if (!token && isAuth) {
        setIsAuth(false);
      }
    };

    checkAuthStatus();

    const intervalId = setInterval(checkAuthStatus, 5000);

    return () => clearInterval(intervalId);
  }, [setIsAuth, isAuth]);

  return (
    <Router>
      <Routes>
        {isAuth ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/login" element={<LoginForm />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404 - Not Found</h1>
    </div>
  );
}

export default App;
