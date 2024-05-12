import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Login from "./login/login";
import { LoginContextProvider } from "./components/login/loginContext";

// import { jwtDecode } from "jwt-decode";

function App() {
  return (
    <>
      <LoginContextProvider>
        <Router>
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route element={<Home />} path="/" exact />
            </Route>
            <Route element={<Login />} path="/login" />
          </Routes>
        </Router>
      </LoginContextProvider>
    </>
  );
}

export default App;
