import React from 'react'
import Marquee from "react-fast-marquee";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiDocker } from "react-icons/si";
import { SiGithub } from 'react-icons/si';

const Slider = () => {
  return (
    <div className='py-8 border-b-2 border-white'>
        <Marquee className='flex flex-row' autoFill={true}>
            <div className='flex flex-row gap-16 px-10'>
                <p className='text-6xl'><FaHtml5/></p>
                <p className='text-6xl'><FaCss3Alt/></p>
                <p className='text-6xl'><SiJavascript/></p>
                <p className='text-6xl'><SiTypescript/></p>
                <p className='text-6xl'><SiReact/></p>
                <p className='text-6xl'><TbBrandNextjs/></p>
                <p className='text-6xl'><SiTailwindcss/></p>
                <p className='text-6xl'><SiDocker/></p>
                <p className='text-6xl'><SiGithub/></p>
            </div>
        </Marquee>
    </div>
  )
}

export default Slider