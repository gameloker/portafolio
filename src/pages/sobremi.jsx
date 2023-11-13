import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <Container id="about" className="py-5">
      <Row>
        <Col>
          <h2>Acerca de Mí</h2>
          <p>¡Hola! Soy [Tu Nombre], un desarrollador web apasionado...</p>
          {/* Añade más detalles sobre ti */}
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;