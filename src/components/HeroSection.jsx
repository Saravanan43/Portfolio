import React from 'react'
import Hero from '../assests/Hero-Img.jpeg'
function HeroSection() {
  return (
    <>
    <div className='flex flex-col lg:flex-row lg:py-32 lg:max-h-full gap-5 px-4 lg:px-12 items-center justify-center py-5 bg-gradient-to-b from-black to-slate-900 border-t-2 border-gray-200'>
         <h1 className='text-lg font-medium text-gray-200 lg:px-10 lg:w-2/3'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cupiditate rerum quibusdam repellendus accusantium quod, odio magni sunt sint similique voluptas aut corporis. Iusto debitis pariatur at, earum animi repellendus.
         </h1>
         <div className='w-full lg:w-1/3 h-60 lg:h-80 px-20'>
            <img src={Hero} alt="Hero" className='rounded-lg w-full h-full object-cover'/>
         </div>
    </div>
    </>
  )
}

export default HeroSection