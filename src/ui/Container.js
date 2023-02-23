import React from 'react';

const mainColor = `bg-black`;

const Container = (props) => {
  const { children } = props;
  return (
    <main className='container flex justify-center items-center'>
      <div className={`${mainColor} w-4/5 h-4/5 border rounded-lg min-w-[10rem]`}>
        {children}
      </div>
    </main>
  );
};

export default Container;