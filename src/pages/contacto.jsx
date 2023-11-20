import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Contacto = () => {
  const handleButtonClick = () => {
    window.location.href = 'mailto:juanpabloruz25@gmail.com';
  };
  return (
    
      <Row>
        <Col>
          <h2>Contacto</h2>
          <Button onClick={handleButtonClick}>
            Enviar correo a Juan Pablo a
          </Button>
        </Col>
      </Row>
  
  );
};

export default Contacto;
