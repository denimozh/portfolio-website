import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiDocker } from "react-icons/si";


const Hero = () => {
  return (
    <div className='h-fill border-b-2 border-white'>
      <div className='flex xl:flex-row flex-col text-white xl:px-10'>
        <div className='basis-[60%] flex flex-col gap-20 xl:py-48'>
          
          <p className='xl:leading-[5rem] xl:text-6xl lg:text-4xl text-2xl'>Denis Mozhayko is a React Front-End Developer and Web Developer based in London, UK</p>
          <div className='flex flex-row gap-10 items-center'>
            <p className='xl:leading-[5rem] xl:text-5xl lg:text-3xl text-1xl text-gray-400'>Tech Stack</p>
            <p className='xl:text-6xl text-gray-400'>|</p>
            <p className='xl:text-6xl hover:text-7xl'><FaHtml5 /></p>
            <p className='xl:text-6xl hover:text-7xl'><FaCss3Alt /></p>
            <p className='xl:text-6xl hover:text-7xl'><SiJavascript /></p>
            <p className='xl:text-6xl hover:text-7xl'><SiTypescript/></p>
            <p className='xl:text-6xl hover:text-7xl'><FaReact /></p>
            <p className='xl:text-6xl hover:text-7xl'><SiTailwindcss/></p>
            <p className='xl:text-6xl hover:text-7xl'><TbBrandNextjs/></p>
          </div>
          <div className='flex flex-row gap-10'>
            <LinkedInIcon sx={{ fontSize: 70 }}/>
            <GitHubIcon sx={{ fontSize: 70 }}/>
            <InstagramIcon sx={{ fontSize: 70 }}/>
          </div>
        </div>
        <div className='basis-[40%]'>
          
        </div>
      </div>
    </div>
  )
}

export default Hero