import React, { useState, useEffect } from 'react';
import { LoaderFive } from "./ui/loader";

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = -25;
    const end = 100;
    const interval = setInterval(() => {
      start += 25;
      setProgress(start);
      if (start >= end) clearInterval(interval);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-[#1DE9B6] font-bold text-3xl'>
        <LoaderFive text="Loading..." />
    </div>
  )
};


export default LoadingBar;