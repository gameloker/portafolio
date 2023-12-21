import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Proyectos from "../src/pages/proyectos";
import SobreMi from "../src/pages/sobremi";
import Contacto from "../src/pages/contacto";
import MainLayout from "./layouts/MainLayout";
import "./index.css";


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/" element={<SobreMi />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </Router>
    <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      </>
  );
};

export default App;
