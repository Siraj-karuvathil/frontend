import React from 'react'

let done = 'https://res.cloudinary.com/dvbplh4z9/image/upload/v1673343358/Cooking%20Academy%20Assets/successss_e9wkd3.webp'

function Success() {

    

  return (
    <>
    <div className='h-screen w-full flex flex-col justify-center items-center'>
       <div className='w-fit grid place-items-center gap-5'>
             <img className='h-40 animate-pulse' src={done} alt="success image" />
            <h3 className='text-2xl font-bold'>Order Completed</h3>
            <button className='bg-primary-clr2 rounded-lg hover:bg-primary-clr1 transition-all duration-300 px-10 py-2'>Go to Course</button>
       </div>
    </div>
    </>
  )
}

export default Success