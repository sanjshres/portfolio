import { ArrowCircleUpRightIcon } from "@phosphor-icons/react";
import React from "react";
import { projects } from "../data/data";

export type Project = {
  id: number;
  title: string;
  link: string;
  description: string;
}

const getProjectPreviewUrl = (url: string) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200`;

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
              src={getProjectPreviewUrl(project.link)}
              alt={project.title}
              className="project-image"
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src =
                  "https://placehold.co/1200x800/111827/e5e7eb?text=Project+Preview";
              }}
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
