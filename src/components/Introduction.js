import React from "react";

import { IntroductionData } from "./../data";
import { colorClasses } from "../styles";

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
        I'm{" "}
        <span className={`${userNameClassName} ${colorClasses.textColor}`}>
          {IntroductionData.full_name}
        </span>
      </p>
      {/* Brief Description */}
      <span className="text-white text-lg">{IntroductionData.description}</span>
    </>
  );
};

export default Introduction;
