import React from 'react'
import PrimaryBtn from '../../components/Button/PrimaryBtn'

const Banner = () => {
  return (
    <>
       <div className='w-full h-[60vh] rounded-md flex items-center justify-center flex-col 
       lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 relative z-10'
       style={{
        backgroundImage: 
       "url('https://t4.ftcdn.net/jpg/03/23/50/79/360_F_323507957_0gQGkUqu7ZStF7SgJ0JssJY7tnM0BGG2.jpg')",
        backgroundSize : 'cover' ,
        backgroundPosition : 'center' ,
        backgroundRepeat : 'no-repeat'
        }}
        >
     <div className='w-full h-full bg-black/80 absolute top-0 left-0 -z-10'>
     <h1 className='lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-bold mt-40
     text-gray-200 uppercase mb-4 text-center'>
       No  <span className='text-indigo-600'>Pain</span>, No 
       <span className='text-indigo-600'>Gain</span>
     </h1>
     <p className='text-lg text-gray-300 font-medium mb-8 text-center'>
      Ignit your fitness journey with premium solutions.
     </p>
     {/* <PrimaryBtn className="px-32 py-3 ml-[52rem] uppercase rounded-full 
     flex justify-center items-center" >Become a Member</PrimaryBtn> */}
     </div>

        </div>
    </>
  )
}

export default Banner
