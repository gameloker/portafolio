import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Projects = () => {
  return (
    <Container id="projects" className="py-5">
      <Row>
        <Col>
          <h2>Mis Proyectos</h2>
          {/* Lista tus proyectos aquí */}
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;