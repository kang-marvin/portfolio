import React from "react";

import { ExperienceData } from "../data";

const listClassName = `
  relative
  after:absolute after:left-[3rem]
  after:top-[4.5rem]
  after:h-[calc(100%-4.5rem)]
  after:w-px
  after:content-['']
  dark:after:bg-neutral-600
`;

const stepHeaderClassName = `
  flex items-center uppercase
  p-6 after:content-['']
`;

const stepIconClassName = `
  mr-2 flex h-[3rem] w-[3rem]
  items-center justify-center rounded-full
  bg-orange-600 text-md font-medium text-black
`;

const stepDateClassName = `
  dark:text-neutral-300
`;

const stepDescriptionClassName = `
  overflow-hidden pr-6 pb-6 pl-[4rem]
`;

const PerExperience = props => {
  const { exp } = props;

  return (
    <li className={listClassName} key={exp.date}>
      {/* Header */}
      <div className={stepHeaderClassName}>
        {/* step icon */}
        <span className={stepIconClassName}>&#x1F4BC;</span>
        {/* step date */}
        <span className={stepDateClassName}>{exp.date}</span>
      </div>
      {/* Description */}
      <div className={stepDescriptionClassName}>
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
