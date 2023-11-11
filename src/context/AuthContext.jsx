import axios from "axios";
import { useState, useEffect, createContext, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const API_URL = "https://localhost:7100/api";
  const [isAuth, setIsAuth] = useState(false);
  const [customerId, setCustomerId] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get(`${API_URL}/customers/validate-token`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setIsAuth(true);
            setCustomerId(response.data.customerId);
            fetchUsername(response.data.customerId);
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            toast.error("Token is expired. Please log in.");
          } else {
            console.error("Token validation failed:", error);
          }
        });
    }
  }, []);

  const fetchUsername = (customerId) => {
    axios
      .get(`${API_URL}/customers/${customerId}`)
      .then((response) => {
        setUsername(response.data.username);
      })
      .catch((error) => {
        console.error("Error fetching username:", error);
      });
  };

  return (
    <AuthContext.Provider value={{ isAuth, customerId, username }}>
      {children}
      <ToastContainer position="bottom-left" autoClose={3000} />
    </AuthContext.Provider>
  );
}

export function useAuthStateContext() {
  return useContext(AuthContext);
}
