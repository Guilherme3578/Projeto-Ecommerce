import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";

import Cadastro from "./components/cadastro/cadastro.jsx";
import Login from "./components/Login/Login.jsx";
import ErrorPage from "./Error/index.jsx";
import ProgramacaoWeb from "./cursos/pw/pw.jsx";
import LinguagensProgramacao from "./cursos/lp/lp.jsx";
import BancoDeDados from "./cursos/bd/bd.jsx";
import Informatica from "./cursos/info/info.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
    <Toaster />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/programacao-web" element={<ProgramacaoWeb />} />
        <Route path="/linguagens-de-programacao" element={<LinguagensProgramacao />} />
        <Route path="/banco-de-dados" element={<BancoDeDados />} />
        <Route path="/informatica" element={<Informatica />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
