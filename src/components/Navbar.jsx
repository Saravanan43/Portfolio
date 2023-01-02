import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'

const MobileNav = ({links}) =>{
    const [open,setOpen]=useState(false);
    return (
        <div className={`lg:hidden bg-black ${open?`h-56 rounded-b-xl`:`h-20`} w-full py-4`}>
        <div className='flex items-center justify-between'>
        <h1 className='text-4xl font-medium font-GreatVibes text-gray-200 pl-4 mb-2'>Saravanan</h1>
        
        {
            open===true ? <FaTimes size={30} className='text-gray-200 hover:text-gray-400 pr-4' onClick={()=>setOpen(false)}/> : <FaBars size={30} className='text-gray-200 hover:text-gray-400 pr-4 duration-200' onClick={()=>setOpen(true)}/>
        }
        
        </div>
        
        {
           open && (
                <div className='flex flex-col items-start px-4 justify-center h-40 w-full duration-200 bg-black gap-2'>
        {
            links.map((link)=>
                <h1 className='text-gray-200 font-medium hover:text-gray-400 cursor-pointer duration-200'>{link.name}</h1>
            )
        }
        </div>
            )
        }
        
    </div>
    )
}

const LgNav = ({links}) => {
    return (
        <div className='hidden w-full h-24 bg-black lg:flex items-center justify-between py-4'>
        <h1 className='text-4xl font-medium items-center font-GreatVibes text-gray-200 pl-10'>Saravanan</h1>
         <div className='hidden lg:flex items-center justify-center gap-5 pr-10'>
             {
                 links.map((link)=>
                     <h1 className='text-gray-200 font-medium hover:text-gray-400 cursor-pointer'>{link.name}</h1>
                 )
             }
         </div>
       </div>
    )
}

const Navbar = () => {
  const links=[{
    id:1,
    name:'Home'
  },
  {
    id:2,
    name:'About'
  },
  {
    id:3,
    name:'Portfolio'
  },
  {
    id:4,
    name:'Experience'
  },
  {
    id:5,
    name:'Contact'
  },
]


  return (
    <>
   <MobileNav links={links}/>
   <LgNav links={links}/>
    </>
  )
}

export default Navbar