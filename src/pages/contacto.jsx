import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Contacto = () => {
  const handleButtonClick = () => {
    window.location.href = 'mailto:juanpabloruz25@gmail.com';
  };
  return (
    <Container id="contact" className="mt-5">
      <Row>
        <Col>
          <h2>Contacto</h2>
          <Button onClick={handleButtonClick}>
            Enviar correo a Juan Pablo
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
