import React from "react";
import { containerClasses, colorClasses } from "../styles";

const Container = (props) => {
  const { children } = props;
  return (
    <div class={containerClasses.div}>
      <main class={`${colorClasses.backgroundColor} ${containerClasses.main}`}>
        {children}
      </main>
    </div>
  );
};

export default Container;
