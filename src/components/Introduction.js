import React from 'react';

const mainColor = `text-orange-400 `;

const GreetingsClassName = `
  text-6xl font-bold mb-5
`;

const IntroductoryClassName = `
  text-4xl font-bold mb-5
`;

const userNameClassName = `
  uppercase font-extrabold
  subpixel-antialiased
`;

const Introduction = () => {
  return (
    <>
      {/* Greetings */}
      <h1 className={GreetingsClassName}>Hello! &#128075;</h1>
      {/* Introductory */}
      <p className={IntroductoryClassName}>
        I'm <span className={`${userNameClassName} ${mainColor}`}>Marvin Kang'ethe</span>
      </p>
      {/* Brief Description */}
      <span className='text-white text-lg'>
        I'm a Software Engineer based in Nairobi, Kenya.
      </span>
    </>
  );
};

export default Introduction;