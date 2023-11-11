import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NavigationProvider from "./context/NavigationContext";
import AuthProvider from "./context/AuthContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </AuthProvider>
    <ToastContainer position="bottom-left" autoClose={3000} />
  </React.StrictMode>
);
