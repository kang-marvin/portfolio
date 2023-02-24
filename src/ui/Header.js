import React from 'react';

import { HeaderData } from '../data';
import { linkClasses } from '../styles';

const LinkWrapper = (props) => {
  const { name, link, className } = props;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      key={name}
    >
      <button
        type="button"
        className={`${linkClasses.button} ${className}`}
      >
        {name}
      </button>
    </a>
  )
}

const Header = (props) => {
  const { pagesTitle, setPage } = props;

  return (
    <div className="flex flex-row-reverse py-4 px-8 space-x-2">
      {HeaderData.links.map((media) => {
        return (
          <LinkWrapper
            name={media.name}
            link={media.link}
            className={media.className}
          />
        )
      })}

      <span className='px-1'></span>

      {pagesTitle.map((title) => {
        return (
          <button
            type="button"
            class={linkClasses.button}
            onClick={() => setPage(title)}
          >
            {title}
          </button>
        )
      })}
    </div>
  );
};

export default Header;