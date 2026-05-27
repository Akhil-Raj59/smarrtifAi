import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";

// Global styles
import "./assets/styles/index.css";
import "./assets/styles/theme.css"
import "./assets/styles/tailwind.css"
import "./assets/styles/fonts.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);