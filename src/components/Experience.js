import React from "react";

import { ExperienceData } from "../data";
import { stepClasses } from "../styles";

const PerExperience = props => {
  const { exp } = props;

  return (
    <li className={stepClasses.list} key={exp.date}>
      {/* Header */}
      <div className={stepClasses.header}>
        {/* step icon */}
        <span className={stepClasses.icon}>&#x1F4BC;</span>
        {/* step date */}
        <span className={stepClasses.date}>{exp.date}</span>
      </div>
      {/* Description */}
      <div className={stepClasses.description}>
        <p className="font-bold text-2xl">{exp.role} - {exp.companyName}</p>
        <span>{exp.description}</span>
      </div>
    </li>
  )
}

const Experience = () => {
  return (
    <ul className="overflow-auto">
      {ExperienceData.experiences.map((experience) => {
        return (
          <PerExperience exp={experience} />
        )
      })}
    </ul>
  );
};

export default Experience;
