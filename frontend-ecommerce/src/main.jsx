import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./views/App.jsx"; // Cambia la ruta a la carpeta views
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
