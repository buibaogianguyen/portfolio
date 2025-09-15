import React from 'react'
import {
	Alert,
	Box,
	Button,
	Card,
	Chip,
	Container,
	Input,
	Modal,
	ProgressBar,
	Text,
} from 'retro-react';


const Hero = () => {
    const name = 'Nguyen Bui';
  return (
    <div className='text-[#FBE9D0]'>
        <div className='max-w-[800px] mt-[-60px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold text-[#F58F7C]     transition-colors duration-300'>
                {name.split("").map((letter, idx) => (
                    <span
                    key={idx}
                    className="inline-block transition-transform duration-300 ease-out hover:-translate-y-2 hover:text-[#1DE9B6]"
                    >
                    {letter === " " ? "\u00A0" : letter}
                    </span>
                ))}
            </h1>
            <p className='font-bold p-2 mt-4 text-[#F58F7C]'>Machine Learning Engineer • Computer Vision & Visuals Lover {":)"}</p>
        </div>
    </div>
  )
}

export default Hero