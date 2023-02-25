import React from "react";

import { HeaderData } from "../data";
import { linkClasses, colorClasses } from "../styles";

const LinkWrapper = (props) => {
  const { name, link } = props;

  return (
    <a href={link} target="_blank" rel="noreferrer" key={name}>
      <button type="button" className={`${linkClasses.button}`}>
        {name}{" "}
        <i class={`bi bi-box-arrow-in-up-right ${colorClasses.linkColor}`}></i>
      </button>
    </a>
  );
};

const Header = (props) => {
  const { pagesTitle, setPage } = props;

  return (
    <div className="flex sm:flex-row flex-col gap-2 sm:float-right py-4 px-4">
      {pagesTitle.map((title) => {
        return (
          <button
            type="button"
            class={linkClasses.button}
            onClick={() => setPage(title)}
          >
            {title}
          </button>
        );
      })}

      <span className="px-1"></span>

      {HeaderData.links.map((media) => {
        return <LinkWrapper name={media.name} link={media.link} />;
      })}
    </div>
  );
};

export default Header;
