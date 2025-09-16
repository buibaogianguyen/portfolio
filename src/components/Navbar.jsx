import React, {useState} from 'react'
import {MdMenu} from 'react-icons/md'
import {IoMdClose} from "react-icons/io";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";


const Navbar = () => {
  const [nav, setNav] = useState(false) 

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-15 max-w-[1240px] mx-auto px-4 text-[#1DE9B6]'>
        <h1 className='w-full text-2xl font-bold text-[#1DE9B6]'>nguyenbui.dev</h1>
        <ul className='hidden md:flex'>
          <li className='w-9/10 p-4 border-b mx-auto flex items-center gap-2 hover:text-[#F58F7C] hover:scale-105 transition-transform duration-200'>
          <FaLinkedin size={24} />
          <a href="https://www.linkedin.com/in/nguyen-bui-9355a1335/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
          <li className='w-9/10 p-4 border-b mx-auto flex items-center gap-2 hover:text-[#F58F7C] hover:scale-105 transition-transform duration-200'>
          <FaGithub size={24} />
          <a href="https://github.com/buibaogianguyen" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li className='w-9/10 p-4 border-b mx-auto flex items-center gap-2 hover:text-[#F58F7C] hover:scale-105 transition-transform duration-200'>
          <FaFileAlt size={24} />
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <IoMdClose size={40}/> : <MdMenu size={40} />}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-[#000000] bg-[#1E1E1E] text-[#1DE9B6] ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-[#1DE9B6] m-4'>nguyenbui.dev</h1>
          <ul className='p-4'>
              <li className='w-9/10 p-4 border-b mx-auto flex items-center gap-2'>
                <FaLinkedin size={24} />
                <a href="https://www.linkedin.com/in/nguyen-bui-9355a1335/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
                <li className='w-9/10 p-4 border-b mx-auto flex items-center gap-2'>
                <FaGithub size={24} />
                <a href="https://github.com/buibaogianguyen" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li className='w-9/10 p-4 border-b mx-auto flex items-center gap-2'>
                <FaFileAlt size={24} />
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar