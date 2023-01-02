import React, { useState } from 'react'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {SiLeetcode,SiGmail} from 'react-icons/si';
function SocialLinks() {
const [expand,setExpand]=useState(false);
const [position,setPosition]=useState(0);
    const Links =[
        {
            name:'LinkedIn',
            icon:(
                <BsLinkedin  size={28}/>
            ),
            link:'https://www.linkedin.com/in/saravanan-2000',
            style:'rounded-tr-lg',
            id:1
        },
        {
            name:'Github',
            icon:(<>
            <BsGithub  size={28}/>
            </>    
            ),
            link:'https://github.com/Saravanan43',
            style:'',
            id:2
        },
        {
            name:'Leetcode',
            icon:(
                <SiLeetcode  size={28}/>
            ),
            link:'https://leetcode.com/nithishviswanathan/',
            style:'',
            id:3
        },
        {
            name:'Gmail',
            icon:(
                <SiGmail size={28}/>
            ),
            link:'mailto:nithishviswanathan@gmail.com',
            style:'',
            id:4
        },
        {
            name:'Resume',
            icon:(
              <h1 className='font-bold text-3xl'>R</h1>
            ),
            link:'https://drive.google.com/file/d/1MRg5r9Si6GI8vRzPRhduKkZGmzyK8YSL/view',
            style:'rounded-br-lg',
            id:5
        },
    ]
  return (
    <>
    <div className='hidden lg:block'>
         {
            Links.map(({id,name,style,icon,link}) => (
                 <li className={`bg-gray-300 px-2 py-1 w-32 flex gap-2 items-center h-10 justify-center duration-200 ${style} ${position===id && expand ? `ml-[0px] rounded-r-md` : `ml-[-84px]`}
            `} onMouseEnter={()=>{setPosition(id);setExpand(true);}} onMouseLeave={()=>{setPosition(0);setExpand(false);}}>
                <a href={link} className='w-20 font-medium text-md' target='_blank' rel="noreferrer">{name}</a>
                {icon}
            </li>
            ))
         }
    </div>
    </>
  )
}

export default SocialLinks