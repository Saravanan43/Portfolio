import React from 'react'

function Projects() {

   const links=[
    {
      name:'Music Player - Fullstack Project',
      link:'',
      code:'',
      img:'https://tse2.mm.bing.net/th?id=OIP.jl9fg5zBo-wjG7sd16Aj5wHaHa&pid=Api&P=0'
    },
    {
      name:'BookMyshow Clone - Frontend Project',
      link:'https://book-myshow-saravanan43.vercel.app/',
      code:'https://github.com/Saravanan43/book-myshow',
      img:'https://tse4.mm.bing.net/th?id=OIP.v5uNZEX9gEE-uCTdIfvddwHaDn&pid=Api&P=0'
    },
    {
      name:'Task Management - Javascript Project',
      link:'https://mini-project-opal-eight.vercel.app/',
      code:'https://tse4.mm.bing.net/th?id=OIP.u4EBes6Muu2fy7iM8igMugHaFX&pid=Api&P=0',
      img:'https://tse2.mm.bing.net/th?id=OIP.iHXWH2K91YAY9VmGKmBiEAHaEK&pid=Api&P=0'
    },
    
   ]

  return (
    <>
    <div className='px-4 lg:px-20 bg-gradient-to-b from-black to-slate-900'>
    <h1 className='font-bold w-28 text-2xl text-gray-100 border-gray-100 border-b-2 mb-6'>Projects</h1>
    <div className='lg:flex gap-5 lg:items-center lg:justify-between'>
       {
      links.map(({name,img,link,code}) =>(
        <div className='w-full lg:w-84 bg-gray-200 flex flex-col justify-center rounded-lg my-3'>
          <div className='h-40'>
            <img src={img}
             alt="project"
             className='w-full h-full rounded-t-lg' />
          </div>
          <h1 className='text-lg font-semibold p-2 text-center'>{name}</h1>
          <div className='flex items-center justify-around'>
            <a href={link}>Link</a>
            <a href={code}>Code</a>
          </div>
      </div>
      ))
     }
    </div>
    
      
      
 
    </div>
    </>
  )
}

export default Projects