import React from "react";

const cardClassName = `
  flex flex-col w-4/5 rounded-lg
  text-center shadow-lg
  dark:bg-neutral-700
  m-4 p-4
`;

const cardHeaderClassName = `
  mb-2 text-xl font-medium
  text-neutral-800
  dark:text-neutral-50
`;

const labelClassName = `
  rounded-xl border bg-gray-600
  px-[.8rem] py-[.5rem] leading-none
`;

const buttonClassName = `
  min-w-[8rem] max-w-[30rem] w-full
  rounded border-2 border-primary px-2 py-2
  text-xs font-medium uppercase leading-normal
  text-primary hover:border-primary-600
  hover:bg-neutral-500 hover:bg-opacity-10
  hover:text-primary-600
`;

const ProjectType = {
  client: "Client Work",
  personal: "Personal Project",
};

const data = [
  {
    type: "client",
    title: "RelishCareers",
    tools: [
      "rails", "react", "semantic-ui",
      "redux", "postgres", "sidekiq", "BitBucket"
    ],
    about: `
      RelishCareers is the online careers marketplace for
      hiring graduate-level job candidates, ranging from MBAs
      to Engineers or Data Scientists.
    `,
    links: [
      {
        name: "Website",
        url: "https://www.relishcareers.com",
      },
    ],
  },
  {
    type: "personal",
    title: "Matching Game",
    tools: [
      "rails", "tailwind", "stimulus-js"
    ],
    about: `
      A memory game for matching tiles that have the
      same color and animal as fast as possible.
    `,
    links: [
      {
        name: "Code on Github",
        url: "https://github.com/kang-marvin/matching-game",
      },
      {
        name: "Deployed to Fly.io",
        url: "https://matching-animal-color-game.fly.dev",
      },
    ],
  },
  {
    type: "personal",
    title: "Question Answer Platform",
    tools: [
      "rails", "tailwind", "react", "postgres"
    ],
    about: `
      A question-answer platform inspired by
      PluralSight assessment page. The project
      uses fake data
    `,
    links: [
      {
        name: "Code on Github",
        url: "https://github.com/kang-marvin/question-answer",
      },
      {
        name: "Deployed to Railway.app",
        url: "https://question-answer-production.up.railway.app",
      },
    ],
  },
  {
    type: "personal",
    title: "AmberScript Job Availability Bot",
    tools: [
      "ruby", "selenium-webdriver", "shell"
    ],
    about: `
      A bot that checks if jobs are available on
      AmberScript.com for transcribers
    `,
    links: [
      {
        name: "Code on Github",
        url: "https://github.com/kang-marvin/transcriber-job-availability-bot",
      },
    ],
  },
];

const PerProject = (props) => {
  const { project } = props;

  const Links = (props) => {
    const { data } = props;

    if (data.length === 0) {
      return;
    }

    return (
      <div className="grid md:grid-flow-col auto-rows-max gap-3">
        {data.map((link) => {
          return (
            <a href={link.url} target="_blank" rel="noreferrer">
              <button className={buttonClassName}>
                {link.name}{" "}
                <i className="bi bi-box-arrow-in-up-right text-green-300"></i>
              </button>
            </a>
          );
        })}
      </div>
    );
  };

  const Tools = (props) => {
    const { data } = props;

    if (data.length === 0) {
      return;
    }

    return (
      <div className="flex flex-wrap items-end justify-center space-x-2 space-y-2 m-4">
        {data.map((tool) => {
          return <span className={labelClassName}>{tool}</span>;
        })}
      </div>
    );
  };

  return (
    <div className={cardClassName}>
      <div className="">
        <h5 className={cardHeaderClassName}>
          {project.title} - {ProjectType[project.type]}
        </h5>

        <p className="
            text-base text-neutral-600
          dark:text-neutral-200
          ">
          {project.about}
        </p>

        <Tools data={project.tools} />

        <Links data={project.links} />
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="grid h-full w-full place-items-center overflow-auto content-center">
      {data.map((project) => {
        return <PerProject project={project} />;
      })}
    </div>
  );
};

export default Portfolio;
