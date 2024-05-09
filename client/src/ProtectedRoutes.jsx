import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate.push("/login");
    } else {
      // Add the token to the headers of HTTP requests
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, [navigate]);

  return <>{children}</>;
}

export default ProtectedRoute;
