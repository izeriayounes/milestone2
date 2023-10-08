import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NavigationProvider from "./context/NavigationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </React.StrictMode>
);
