import React from "react";
import {Row, Col, Button, Card } from "react-bootstrap";
import miImagen from '../assets/images/im1.jpg'




const Proyectos = () => {
  return (
    
      <Row>
        <Col>
          <h2>Mis Proyectos</h2>
          <Card className="mt-5" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={miImagen} />
            <Card.Body>
              <Card.Title>Proveedores</Card.Title>
              <Card.Text>
                Proyecto orientado a la administracion de proveedores
              </Card.Text>
              <Button variant="primary">Acceder</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
   
  );
};

export default Proyectos;