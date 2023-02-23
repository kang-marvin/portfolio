import React from "react";

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

const data = [
  {
    date: "october 2016 - december 2020",
    companyName: "Andela",
    role: "Software Engineer",
    description: `
      Worked on internal products for several months
      and later worked for their clients RelishCareers
      and IndieGogo
    `
  },
  {
    date: "july 2017 - august 2020",
    companyName: "RelishCareers (via Andela) along ChiedoLabs",
    role: "Remote Software Developer",
    description: `
      Worked along ChiedoLabs to build and manage the RelishCareers web app.
    `
  },
  {
    date: "october 2020 - november 2020",
    companyName: "IndieGogo (via Andela)",
    role: "Remote Software Developer",
    description: `
      Worked on the user interface and bug fixes
    `
  },
  {
    date: "january 2021 - october 2022",
    companyName: "RelishCareers",
    role: "Senior Software Engineer",
    description: `
      Build and manage the RelishCareers v2 of the
      app from scratch due to scalability issues of
      v1, lack of test and other issues
    `
  },
  {
    date: "august 2021 - october 2022",
    companyName: "TransparentCareer (RelishCareers Acquired)",
    role: "Senior Software Engineer",
    description: `
      Manage the web app while incorporating it's features
      and data to RelishCareers v2 app
    `
  },
];

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
      {data.map((experience) => {
        return (
          <PerExperience exp={experience} />
        )
      })}
    </ul>
  );
};

export default Experience;
