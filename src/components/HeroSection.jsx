import React from 'react'
import Hero from '../assests/Hero-Img.jpeg'
function HeroSection() {
  return (
    <>
    <div name='About' className='flex flex-col lg:flex-row lg:py-32 lg:max-h-full gap-5 px-4 lg:px-12 items-center justify-center py-5 bg-gradient-to-b from-black to-slate-900 border-t-2 border-gray-200'>
         <h1 className='lg:hidden font-bold w-20 text-2xl text-gray-100 border-gray-100 border-b-2 mr-auto'>About</h1>
        
         <h1 className='text-lg font-medium text-gray-200 lg:px-10 lg:w-2/3'>
         Saravanan is a skilled technology consultant with a demonstrated history of working in the IT industry. His aspiration is towards Full Stack Web Development and he is skilled in Javascript, C++, ReactJS, NodeJS, HTML, CSS and SQL. He is holding a professional Bachelor Degree focused in Computer Science from SRM Institute of Technology, Chennai.
         </h1>
         <div className='w-full lg:w-1/3 h-60 lg:h-80 px-20'>
            <img src={Hero} alt="Hero" className='rounded-lg w-full h-full object-cover'/>
         </div>
    </div>
    </>
  )
}

export default HeroSection