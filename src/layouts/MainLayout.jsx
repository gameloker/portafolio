import React from 'react'
import { Outlet } from 'react-router-dom'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Navbar from "../pages/navbar";
import { Container, Row, Col, Button } from "react-bootstrap";
export default function MainLayout() {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div style={{position:'relative'}}>
      
      <Navbar />
      <Container className="mt-5">
    <div style={{zIndex:'3'}}>
    <Outlet/>
    </div>
     
      
      </Container>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{ "fullScreen": false, "background":{ "image":" linear-gradient(19deg, #a970ff 0%, #B721FF 100%)" }, "particles":{ "number":{ "value":30, "density":{ "enable":true, "value_area":400 } }, "color":{ "value":"#ffffff" }, "shape": { "type": "square", "stroke":{ "width":0, "color":"#000000" }, "polygon":{ "nb_sides":5 } }, "opacity":{ "value":0.25, "random":true, "anim":{ "enable":false, "speed":1, "opacity_min":0.1, "sync":false } }, "size":{ "value":29, "random":true, "anim":{ "enable":false, "speed":2, "size_min":0.1, "sync":false } }, "line_linked":{ "enable":false, "distance":300, "color":"#ffffff", "opacity":0, "width":0 }, "move":{ "enable":true, "speed":0.5, "direction":"top", "straight":true, "out_mode":"out", "bounce":false, "attract":{ "enable":false, "rotateX":600, "rotateY":1200 } } }, "interactivity":{ "detect_on":"canvas", "events":{ "onhover":{ "enable":false, "mode":"repulse" }, "onclick":{ "enable":false, "mode":"push" }, "resize":true }, "modes":{ "grab":{ "distance":800, "line_linked":{ "opacity":1 } }, "bubble":{ "distance":790, "size":79, "duration":2, "opacity":0.8, "speed":3 }, "repulse":{ "distance":400, "duration":0.4 }, "push":{ "particles_nb":4 }, "remove":{ "particles_nb":2 } } }, "retina_detect":true}}
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100vw',
            minHeight: '100vh',
            zIndex:'-9999'  // Asegura que esté detrás de otros elementos
      }}/>
      </div>
  )
}



