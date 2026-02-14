import React from "react";
import { Row, Col } from "react-bootstrap";
import { EnvelopeSimpleIcon, PhoneIcon } from "@phosphor-icons/react";
import { socialLinks } from "../data/data";

const GetInTouch: React.FC = () => {
  return (
    <section className="get-in-touch container mt-5 d-flex flex-column align-items-start justify-content-center w-100 p-4">
      <h1 className="mb-4 font-4xl text-accent">
        Get In Touch<span className="text-accent">.</span>
      </h1>

      <p className="mb-5 text-muted contact-message font-lg">
        I’m always open to discussing new opportunities, collaborations, or just
        connecting with fellow developers. Feel free to reach out — I’d love to
        hear from you.
      </p>

      <Row className="w-100 gy-4">
        <Col md={6} className="d-flex align-items-center gap-3">
          <PhoneIcon size={28} className="text-accent" />
          <div>
            <h6 className="mb-1">Phone</h6>
            <p className="mb-0">+1 (123) 456-7890</p>
          </div>
        </Col>

        <Col md={6} className="d-flex align-items-center gap-3">
          <EnvelopeSimpleIcon size={28} className="text-accent" />
          <div>
            <h6 className="mb-1">Email</h6>
            <a
              href="mailto:your.email@example.com"
              className="text-decoration-none text-reset"
            >
              your.email@example.com
            </a>
          </div>
        </Col>
        <Col xs={12} className="d-flex align-items-center gap-4 mt-4 pt-3">
          <div className="d-flex gap-3">
            {socialLinks.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition text-2xl"
                title={name}
                aria-label={name}
              >
                <Icon size={32} />
              </a>
            ))}
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default GetInTouch;
