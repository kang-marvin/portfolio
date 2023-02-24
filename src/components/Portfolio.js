import React from "react";

import { PortfolioData } from "../data";

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
          {project.title} - {PortfolioData.project_types[project.type]}
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
      {PortfolioData.work.map((project) => {
        return <PerProject project={project} />;
      })}
    </div>
  );
};

export default Portfolio;
