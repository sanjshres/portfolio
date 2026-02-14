import React from "react";
import { skillData } from "../data/data";


export type SkillCategory = {
  category: string;
  skills: string[];
}

const Skills: React.FC = () => {
  return (
    <section className="skills container mb-5">
      <h1 className="font-4xl mb-4">
        Skills<span className="text-accent">.</span>
      </h1>

      <div className="skills-section mb-5">
        {skillData.map((category, idx) => (
          <div key={idx} className="skill-row d-flex align-items-center p-4">
            <div className="skill-title font-xl fw-semibold">
              {category.category}
            </div>
            <div className="skill-list d-flex align-items-center flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
