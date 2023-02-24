import React from 'react';

import { FooterData } from '../data';

const buttonClassName = `
  rounded px-4 p-2 text-xs
  font-medium uppercase leading-normal
  text-primary bg-neutral-100
  hover:bg-neutral-300
`;

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
        className={buttonClassName}
      >
        {name}
      </button>
    </a>
  )
}

const Footer = () => {
  return (
    <div className="flex justify-center py-4 space-x-2">
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