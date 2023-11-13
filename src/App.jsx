import React from 'react';
import Navbar from './pages/navbar';
import AboutMe from './pages/sobremi';
import Projects from './pages/proyectos';
import Contact from './pages/contacto';

const App = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Projects />
      <Contact />
      {/* Agrega aquí el contenido principal de tu aplicación */}
    </div>
  );
};

export default App;
