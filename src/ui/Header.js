import React from 'react';

const data = [
  {
    name: "Resume",
    link: "https://github.com/kang-marvin/resume/blob/master/Marvin%20Kang'ethe%20Resume.pdf",
    className: "outline outline-offset-2 outline-blue-400/50 text-blue-500"
  },
];

const buttonClassName = `
  rounded px-4 p-2 text-xs
  font-medium uppercase leading-normal
  text-primary bg-neutral-100
  hover:bg-neutral-300 min-w-[7rem]
`;

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
        className={`${buttonClassName} ${className}`}
      >
        {name}
      </button>
    </a>
  )
}

const Header = (props) => {
  const { children } = props;

  return (
    <div className="flex flex-row-reverse py-4 px-8 space-x-2">
      {children}

      {data.map((media) => {
        return (
          <LinkWrapper
            name={media.name}
            link={media.link}
            className={media.className}
          />
        )
      })}
    </div>
  );
};

export default Header;