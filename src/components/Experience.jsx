import React from 'react'

function Experience() {
  return (
    <div name='Experience' className='w-full bg-gradient-to-b from-slate-900 to-black px-4 lg:px-20 flex flex-col gap-2 pb-10'>
        <h1 className='font-bold w-36 text-2xl text-gray-100 border-gray-100 border-b-2'>Experience</h1>
        <h2 className='font-semibold text-xl text-gray-300'>Technology Consultant</h2>
        <div className='lg:flex lg:items-center lg:justify-between lg:gap-10'>
            <div className=' lg:px-0 lg:w-1/3 h-60'>
            <img src="https://m.economictimes.com/thumb/msid-75798602,width-1200,height-900,resizemode-4,imgsize-302579/election-at-pwc-india-5-candidates-in-fray-for-the-top-job.jpg"
             alt="C1"
             className='w-full h-full rounded-lg' />
        </div>
        <p className='text-lg font-medium text-gray-200  text-start lg:w-3/4 mt-2'>
        Saravanan is working at PwC AC from March 2022. In this period, he is working for a client who is one of the leading telecommunications companies. He is supporting the project based on the requirements he got from the onsite counterparts by doing POC, development, and testing.
        </p>
        </div>
        
    </div>
  )
}

export default Experience