import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row items-center justify-between py-4 border-b-2 border-white pr-10 pl-4'>
        <div className='text-2xl pr-2'>
            <p>denimozh.dev</p>
        </div>
        <div className='flex flex-row gap-36 text-xl text-gray-400 pr-10'>
            <p>PROJECTS</p>
            <p>ABOUT</p>
            <p>CONTACT</p>
        </div>
    </div>
  )
}

export default Navbar