import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const SobreMi = () => {
  return (
    <Container
      id="about"
      style={{
        paddingTop: '150px',
        paddingBottom: '150px',
        position: 'relative',
        zIndex: '9999', // Ensure that the z-index is higher than the particle background
      }}
    >
      <Row>
        <Col>
          <h2>Acerca de Mí</h2>
          <p>¡Hola! Soy Juan Pablo Ruz, un desarrollador web fullStack apasionado...</p>
          {/* Add more details about yourself */}
        </Col>
      </Row>
    </Container>
  );
};

export default SobreMi;