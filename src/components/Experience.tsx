import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import {
  CaretCircleLeftIcon,
  CaretCircleRightIcon,
  CheckIcon,
} from "@phosphor-icons/react";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Apple",
    role: "Software Developer",
    duration: "July – December 2016",
    responsibilities: [
      "Implemented performance optimization strategies, resulting in a 20% improvement in page load times across the platform.",
      "Ensured cross-browser compatibility for the platform, enhancing the user experience for a diverse user base.",
      "Integrated interactive data analytics features into the platform.",
    ],
  },
  {
    company: "Microsoft",
    role: "Frontend Engineer",
    duration: "Jan – June 2017",
    responsibilities: [
      "Built scalable React components for internal dashboards.",
      "Collaborated with design team to improve accessibility.",
    ],
  },
  {
    company: "Spotify",
    role: "UI Developer",
    duration: "July – Dec 2017",
    responsibilities: [
      "Optimized media streaming interfaces for faster load times.",
      "Implemented A/B testing features for UX improvements.",
    ],
  },
  {
    company: "Stripe",
    role: "Frontend Developer",
    duration: "Jan – Dec 2018",
    responsibilities: [
      "Designed payment integration features for web apps.",
      "Improved UI responsiveness across devices.",
    ],
  },
  {
    company: "Webflow",
    role: "Software Developer",
    duration: "Jan – June 2019",
    responsibilities: [
      "Implemented interactive analytics features.",
      "Enhanced platform performance by 20%.",
    ],
  },
];

const Experience: React.FC = () => {
  const [selected, setSelected] = useState(0);

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
    <section className="experience container mt-5 d-flex flex-column align-items-start w-100 p-4">
      <h1 className="mb-5">
        Experience<span className="text-accent">.</span>
      </h1>

      <Row>
        {/* Company list for md+ screens */}
        <Col md={3} className="d-none d-md-flex flex-column position-relative">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`py-2 px-2 cursor-pointer d-flex justify-content-start align-items-center ${
                selected === i ? "font-weight-bold text-accent" : ""
              }`}
              onClick={() => setSelected(i)}
              style={{ position: "relative" }}
            >
              <p className="font-2xl m-0 company-name">{exp.company}</p>
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

            {/* {selected === 0 && />} */}
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
