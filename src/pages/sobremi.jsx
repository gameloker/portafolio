import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const SobreMi = () => {
  return (
    <Container id="about" style={{paddingTop:'150px', paddingBottom:'150px'}}>
      <Row>
        <Col>
          <h2>Acerca de Mí</h2>
          <p>¡Hola! Soy Juan Pablo Ruz, un desarrollador web fullStack apasionado...</p>
          {/* Añade más detalles sobre ti */}
        </Col>
      </Row>
    </Container>
  );
};

export default SobreMi;