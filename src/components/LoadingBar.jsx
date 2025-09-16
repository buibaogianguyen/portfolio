import React, { useState, useEffect } from 'react';
import { LoaderFive } from "./ui/loader";

const LoadingBar = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-[#1DE9B6] font-bold text-3xl'>
        <LoaderFive text="Loading..." />
    </div>
  )
};


export default LoadingBar;