import React,{useEffect} from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";



const Header = () => {
  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    if (window.innerWidth < 992) {
      document.getElementById("buttonNav").click();
      console.log(window.innerWidth);
    }
    
  },[location.pathname])

  return (
    
    <Navbar bg="dark" variant="dark" expand="lg" className="p-4 bg-black"  >
      <div className="container">
      <div className="">
      <Navbar.Brand href="#home">Mi Portafolio</Navbar.Brand>
      </div>
        
        <div className="">
        <Navbar.Toggle aria-controls="basic-navbar-nav " id="buttonNav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
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
        </div>
        </div>
    </Navbar>
  );
};

export default Header;
