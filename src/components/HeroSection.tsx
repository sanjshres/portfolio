import React from "react";
import { Col, Row } from "react-bootstrap";
import { DownloadSimpleIcon } from "@phosphor-icons/react";
import selfImage from "../assets/images/selfImage.jpeg";
import cvFile from "../assets/CV_SGS_Feb_2026.pdf";

type HeroSectionProps = {
  onToggleContact: () => void;
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  onToggleContact,
}) => {
  return (
    <section className="hero p-4 d-flex align-items-center container">
      <Row className="w-100">
        <Col
          xs={12}
          md={7}
          className="d-flex justify-content-center align-items-start flex-column"
        >
          <div className="hero-content">
            {" "}
            <h4 className="font-2xl fw-regular m-0 p-0">Hey, I'm Sanjay 👋🏻</h4>
            <h2 className="font-5xl fw-semibold my-1">
              <span className="text-accent">Frontend </span> Developer
            </h2>
            <p className="font-lg">
              I’m a Frontend developer based in Nepal, passionate about building
              interactive, high-performance web applications that users love. I
              turn ideas into smooth, engaging experiences on the web.
            </p>
          </div>

          <div className="hero-cta d-flex gap-3 mt-4">
            <button className="btn btn-secondary" onClick={onToggleContact}>
              Get in touch
            </button>{" "}
            <a
              className="btn btn-secondary-outline d-inline-flex align-items-center gap-2"
              href={cvFile}
              download="Sanjay_Shrestha_CV.pdf"
            >
              CV <DownloadSimpleIcon size={18} weight="bold" />
            </a>
          </div>
        </Col>

        <Col xs={12} md={5}>
          <div className="hero-image-container d-flex justify-content-center">
            <img src={selfImage} alt="Hero Image" className="hero-image" />
          </div>
        </Col>
      </Row>
    </section>
  );
};
