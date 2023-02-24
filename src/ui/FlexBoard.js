import React from 'react';

const sharedClassName = `
  flex flex-col p-4 h-fit
  text-white
`;

const FlexBoard = (props) => {
  const {children, className} = props;
  return (
    <div className={`${sharedClassName} ${className}`}>
      {children}
    </div>
  );
};

export default FlexBoard;