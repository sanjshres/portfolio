import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import {
  CaretCircleLeftIcon,
  CaretCircleRightIcon,
  CheckIcon,
} from "@phosphor-icons/react";
import { experiences } from "../data/data";

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
};

const getYearRange = (duration: string) => {
  const yearMatches = duration.match(/\d{4}/g);
  if (!yearMatches || yearMatches.length === 0) return duration;

  const startYear = yearMatches[0];
  const endYear = duration.toLowerCase().includes("present")
    ? "Present"
    : yearMatches[yearMatches.length - 1];

  return `${startYear} - ${endYear}`;
};

const Experience: React.FC = () => {
  const [selected, setSelected] = useState(0);
  // const companyName = experiences[0]?.company ?? "";

  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <section className="experience container my-5 d-flex flex-column align-items-start w-100 p-4">
      <h1 className="font-4xl mb-4">
        Experience<span className="text-accent">.</span>
      </h1>
      {/* {companyName && (
        <p className="experience-company mb-4">
          {companyName}
          <span className="text-accent">.</span>
        </p>
      )} */}

      <Row className="w-100">
        <Col md={3} className="d-none d-md-flex flex-column position-relative">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`py-2 px-2 cursor-pointer d-flex justify-content-start align-items-center ${
                selected === i ? "text-accent" : ""
              }`}
              onClick={() => setSelected(i)}
              style={{ position: "relative" }}
            >
              <p className="font-2xl company-name">
                {getYearRange(exp.duration)}
              </p>
              {selected === i && (
                <motion.div
                  layoutId="activeIndicator"
                  className="activeIndicator"
                />
              )}
            </div>
          ))}
        </Col>

        <Col
          xs={12}
          md={9}
          className="d-flex flex-column align-items-center position-relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-100"
            >
              <motion.h5
                variants={itemVariants}
                className="mb-1 font-2xl fw-semibold text-center text-md-start"
              >
                {experiences[selected].role}
                <span className="text-accent">
                  {" "}
                  @ {experiences[selected].company}
                </span>
              </motion.h5>
              <motion.p
                variants={itemVariants}
                className="text-muted mb-3 text-center text-md-start"
              >
                {experiences[selected].duration}
              </motion.p>
              <motion.ul className="list-unstyled ps-3">
                {experiences[selected].responsibilities.map((resp, i) => (
                  <motion.li
                    key={i}
                    className="mb-2 d-flex align-items-center font-lg"
                    variants={itemVariants}
                  >
                    <CheckIcon
                      className="text-accent flex-shrink-0"
                      size={28}
                      style={{ marginRight: "0.5rem", minWidth: 28 }}
                    />
                    <span>{resp}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </AnimatePresence>
          <div className="d-flex d-md-none w-100 my-3 gap-3">
            {selected > 0 && (
              <button
                className="btn btn-icon"
                onClick={() => setSelected(selected - 1)}
              >
                <CaretCircleLeftIcon size={24} />
              </button>
            )}

            {selected < experiences.length - 1 && (
              <button
                className="btn btn-icon"
                onClick={() => setSelected(selected + 1)}
              >
                <CaretCircleRightIcon size={24} />
              </button>
            )}
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Experience;
