import { ArrowCircleUpRightIcon } from "@phosphor-icons/react";
import React from "react";
import { projects } from "../data/data";

export type Project = {
  id: number;
  title: string;
  link: string;
  description: string;
}

const Projects: React.FC = () => {
  return (
    <div className="projects-section container p-4">
      <h1 className="font-4xl mb-4">
        {" "}
        Projects<span className="text-accent">.</span>{" "}
      </h1>

      <div className="projects-container">
        {projects.map((project: Project) => (
          <a key={project.id} href={project.link} className="project-item">
            <img
              src="/src/assets/images/selfImage.jpg"
              alt={project.title}
              className="project-image"
            />

            <div className="project-overlay">
              <h2>
                {project.title}
                <ArrowCircleUpRightIcon size={24} />
              </h2>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
