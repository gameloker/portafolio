import React, { useRef } from "react";
import { Container,Button } from "react-bootstrap";
import "../styles/project.css";

const Proyectos = () => {
  const slideRef = useRef(null);

  const handleNextClick = () => {
    const items = slideRef.current.querySelectorAll('.item');
    slideRef.current.appendChild(items[0]);
  };

  const handlePrevClick = () => {
    const items = slideRef.current.querySelectorAll('.item');
    slideRef.current.prepend(items[items.length - 1]);
  };

  return (
    
    <div className="containerr">
      <div className="slide" ref={slideRef}>
        <div
          className="item"
          style={{ backgroundImage: 'url(https://i.ibb.co/qCkd9jS/img1.jpg)' }}
        >
          <div className="content">
            <div className="name">Switzerland</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <Button>Acceder</Button>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: 'url(https://i.ibb.co/jrRb11q/img2.jpg)' }}
        >
          <div className="content">
            <div className="name">Finland</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <Button>Acceder</Button>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: 'url(https://i.ibb.co/NSwVv8D/img3.jpg)' }}
        >
          <div className="content">
            <div className="name">Iceland</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <Button>Acceder</Button>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: 'url(https://i.ibb.co/Bq4Q0M8/img4.jpg)' }}
        >
          <div className="content">
            <div className="name">Australia</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <Button>Acceder</Button>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: 'url(https://i.ibb.co/jTQfmTq/img5.jpg)' }}
        >
          <div className="content">
            <div className="name">Netherlands</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <Button>Acceder</Button>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: 'url(https://i.ibb.co/RNkk6L0/img6.jpg)' }}
        >
          <div className="content">
            <div className="name">Ireland</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <Button>Acceder</Button>
          </div>
        </div>
      </div>

      <div className="button">
        <Button className="prev" onClick={handlePrevClick}>
          <i className="fa-solid fa-arrow-left"></i>
        </Button>
        <Button className="next" onClick={handleNextClick}>
          <i className="fa-solid fa-arrow-right"></i>
        </Button>
      </div>
    </div>
  );
};

export default Proyectos;