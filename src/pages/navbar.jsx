import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const closeNavbar = () => setExpanded(false);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="p-4 bg-black"
      style={{ zIndex: '2' }}
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="#home">Mi Portafolio</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" onClick={closeNavbar}>
              Sobre Mí
            </Nav.Link>
            <Nav.Link as={Link} to="/proyectos" onClick={closeNavbar}>
              Proyectos
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto" onClick={closeNavbar}>
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;