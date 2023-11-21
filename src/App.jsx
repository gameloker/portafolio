import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Proyectos from "../src/pages/proyectos";
import SobreMi from "../src/pages/sobremi";
import Contacto from "../src/pages/contacto";
import MainLayout from "./layouts/MainLayout";
import "./App.css";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
