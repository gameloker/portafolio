import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-4 bg-black" style={{zIndex:'2'}} >
      <Container>
        <Navbar.Brand href="#home">Mi Portafolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" >
              Sobre Mí
            </Nav.Link>
            <Nav.Link as={Link} to="/proyectos">
              Proyectos
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
