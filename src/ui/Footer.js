import React from 'react';

import { FooterData } from '../data';
import { linkClasses } from '../styles';

const LinkWrapper = (props) => {
  const { name, link } = props;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      key={name}
    >
      <button
        type="button"
        className={linkClasses.button}
      >
        {name}
      </button>
    </a>
  )
}

const Footer = () => {
  return (
    <div className="flex sm:flex-row flex-col gap-2 justify-center py-4">
      {FooterData.links.map((media) => {
        return (
          <LinkWrapper
            name={media.name}
            link={media.link}
          />
        )
      })}
    </div>
  );
};

export default Footer;