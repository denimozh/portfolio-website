import React from 'react'

const Projects = () => {
  return (
    <div className='py-32 flex-col xl:px-10'>
      <div className='text-6xl text-center'>
        <p>Projects</p>
      </div>
      <div className='pt-20 justify-center items-center'>
        <div className='grid grid-rows-12 grid-flow-col gap-4'>
          <div className='row-span-6 bg-white p-14 text-black rounded-lg'>1</div>
          <div className='bg-white row-span-6 p-14 text-black rounded-lg'>2</div>
          <div className=' bg-white row-span-4 p-10 text-black rounded-lg'>3</div>
          <div className='row-span-6 bg-white p-10 text-black rounded-lg'>4</div>
          <div className=' bg-white row-span-2 p-10 text-black rounded-lg'>5</div>
        </div>
      </div>
    </div>
  )
}

export default Projects