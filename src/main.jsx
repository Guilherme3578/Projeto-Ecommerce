import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cadastro from "./components/cadastro/cadastro.jsx";
import Login from "./components/Login/Login.jsx";
import ErrorPage from "./Error/index.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
  <Route path="/cadastro" element={<Cadastro />} />
  <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
