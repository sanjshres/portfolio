import React from "react";
import { Col, Row } from "react-bootstrap";

export const HeroSection: React.FC = () => {
  return (
    <section className="hero p-4 d-flex align-items-center">
      <Row className="w-100">
        <Col xs={12} md={7} className="d-flex justify-content-center align-items-start flex-column">
          <div className="hero-content">
            {" "}
            <h4 className="font-xl fw-regular">Hey, I'm Sanjay 👋🏻</h4>
            <h2 className="font-5xl fw-semibold my-3">
              <span className="text-accent">React </span> Developer 
            </h2>
            <p className="font-md">
              I’m a React developer based in Nepal, passionate about building
              interactive, high-performance web applications that users love. I
              turn ideas into smooth, engaging experiences on the web.
            </p>
          </div>

          <div className="hero-cta">
            <button className="btn btn-secondary">Get in touch</button>{" "}
            <button className="btn btn-secondary-outline">CV</button>
          </div>
        </Col>

        <Col xs={12} md={5}>
         <div className="hero-image-container d-flex justify-content-center">
             <img
            src="/src/assets/images/selfImage.jpg"
            alt="Hero Image"
            className="hero-image"
          />
            </div>
        </Col>
      </Row>
    </section>
  );
};
