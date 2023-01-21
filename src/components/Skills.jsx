import React from 'react'

const LGSkill = ({skill}) => {
    return(
        <>
        <div className='w-full flex items-center justify-center gap-3'>
        {
            skill.map(({id,name}) => (
                <div className='bg-slate-200 px-1 py-1 rounded-2xl shadow-sm w-28' key={id}>
                  <h3 className='text-gray-700 font-semibold text-lg text-center'>{name}</h3>
                </div>
            ))
        }
       
        </div>
        </>
    )
}

const SmSkill = ({skill}) => {
    return (
        <>
           <div className='w-full flex flex-wrap items-center justify-center gap-3'>
        {
            skill.map(({id,name}) => (
                <div className='bg-slate-200 px-1 py-1 rounded-2xl shadow-sm w-28' key={id}>
                  <h3 className='text-gray-700 font-semibold text-lg text-center'>{name}</h3>
                </div>
            ))
        }
       
        </div>
        </>
    )
}
function Skills() {
    
    const skill=[
        {
            id:1,
            name:'C++'
        },
        {
            id:2,
            name:'Javascript'
        },
        {
            id:3,
            name:'React JS'
        },
        {
            id:4,
            name:'Node JS'
        },
        {
            id:5,
            name:'Redux'
        },
        {
            id:6,
            name:'SQL'
        },
        {
            id:7,
            name:'Mongo DB'
        },
        {
            id:8,
            name:'DSA'
        },
        {
            id:9,
            name:'GIT'
        },

    ]

  return (
    <>
    <div name='Skills' className='w-full bg-gradient-to-b from-slate-900 to-black  px-4 lg:px-20 pt-10'>
    <h1 className='font-bold w-20 text-2xl text-gray-100 border-gray-100 border-b-2 mb-6'>Skills</h1>
        <div className='hidden lg:block w-full h-full'>
            <LGSkill skill={skill}/>
        </div>     
        <div className='lg:hidden w-full h-full'>
            <SmSkill skill={skill}/>
        </div>  
  
        
        
        
    </div>
       
    </>
  )
}

export default Skills