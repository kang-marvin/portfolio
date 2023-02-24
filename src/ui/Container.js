import React from 'react';

const mainColor = `bg-black`;

const Container = (props) => {
  const { children } = props;
  return (
    <div className='flex justify-center w-screen h-[90%] items-center'>
      <div className={`${mainColor} w-4/5 h-[98%] border rounded-lg min-w-[10rem]`}>
        {children}
      </div>
    </div>
  );
};

export default Container;