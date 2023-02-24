import React from "react";

import { PortfolioData } from "../data";
import { cardClasses, colorClasses } from "../styles";

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
              <button className={cardClasses.button}>
                {link.name}{" "}
                <i class={`bi bi-box-arrow-in-up-right ${colorClasses.linkColor}`}></i>
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
          return <span className={cardClasses.label}>{tool}</span>;
        })}
      </div>
    );
  };

  return (
    <div className={cardClasses.card}>
      <div>
        <h5 className={cardClasses.header}>
          {project.title} - {PortfolioData.project_types[project.type]}
        </h5>

        <p className={colorClasses.infoParagraph}>
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
