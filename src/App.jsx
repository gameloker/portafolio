import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/pages/navbar';
import Proyectos from '../src/pages/proyectos';
import SobreMi from '../src/pages/sobremi';
import Contacto from '../src/pages/contacto';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
};

export default App;