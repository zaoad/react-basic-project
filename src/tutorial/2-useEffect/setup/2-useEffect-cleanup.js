import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)
  const CheckSize = () => {
    setSize(window.innerWidth)
  }
  console.log(size)
  useEffect(()=>{
    console.log('use effect')
    window.addEventListener('resize', CheckSize)
    return ()=>{
      console.log('cleanup')
      window.removeEventListener("resize", CheckSize)
    }
  });
  console.log('render')
  return <>
      <h1>window</h1>
      <h2>{size} Px</h2>
    </>;
};

export default UseEffectCleanup;
