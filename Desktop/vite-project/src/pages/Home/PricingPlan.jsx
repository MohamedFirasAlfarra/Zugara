import React from 'react'
import { CheckSquare, Dumbbell } from 'lucide-react'
import PrimaryBtn from '../../components/Button/PrimaryBtn';
const PricingPlan = () => {
  return (
    <>
      <div className="div1 w-full h-auto flex justify-center items-center flex-col 
      lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
       <h6 className='text-4xl font-medium text-gray-200 flex items-center gap-x-2 mb-6'>
       <Dumbbell className='w-6 h-6 -rotate-45 text-indigo-600' />
          Our Subscribe
       </h6>
      

         {/*   Basic Plan  */}

       <div className='w-full h-auto flex justify-center gap-x-5 gap-y-8 flex-wrap'>

         <div className='lg:w-[28%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10
         py-10 bg-black/10 rounded-lg border-[6px] border-gray-600 *:hover:border-indigo-600/40
         hover:bg-gray-600/10 ease-out duration-700 cursor-pointer'>
         <h2 className='lg:text-4xl md:text-4xl sm:text-3xl text-3xl
          text-white font-semibold mb-5'>
             Basic Plan</h2>    
         <h1 className='text-5xl text-indigo-600 font-bold mb-3 tracking-wide'>
            $165.00{"  "}
            <span  className='lg:text-5xl md:text-5xl sm:text-4xl text-4xl text-gray-300
            font-medium tracking-normal'> / month</span>
         </h1>
         <hr className='border-gray-600/40 my-7'/>
        <div className='w-full h-auto space-y-2 mb-8'> 
        <div className='w-full h-auto flex items-center gap-x-2'>
            <CheckSquare className='w-5 h-5 text-indigo-600'/>
            <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                Get access to all gym classes
            </p>
         </div>
         <div className='w-full h-auto flex items-center gap-x-2'>
            <CheckSquare className='w-5 h-5 text-indigo-600'/>
            <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                Unlimited yoga classess
            </p>
         </div>
         <div className='w-full h-auto flex items-center gap-x-2'>
            <CheckSquare className='w-5 h-5 text-indigo-600'/>
            <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                Use of lockers
            </p>
         </div>
        </div>
        <PrimaryBtn className="w-56 h-11 text-g justify-center
        font-semibold tracking-wider mb-3  uppercase rounded-full" >
            Select 
            </PrimaryBtn>
         </div>

         {/*   Premium Plan  */}



         <div className='lg:w-[32%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10
         py-10 bg-indigo-600/10 rounded-lg border-[6px] border-gray-600 *:hover:border-indigo-600/40
         hover:bg-gray-600/10 ease-out duration-700 cursor-pointer relative'>

            <div className='absolute -top-6 left-[50%] translate-x-[-50%] bg-indigo-600 py-2 px-5 rounded-full
            text-base font-medium text-white'>Recommended</div>

         <h2 className='lg:text-4xl md:text-4xl sm:text-3xl text-3xl
          text-white font-semibold mb-5'>
             Premium Plan</h2>    
         <h1 className='text-5xl text-indigo-600 font-bold mb-3 tracking-wide'>
            $200.00
            <span  className='lg:text-5xl md:text-5xl sm:text-4xl text-4xl text-gray-300
            font-medium tracking-normal'> / month</span>
         </h1>
         <hr className='border-gray-600/40 my-7'/>
        <div className='w-full h-auto space-y-2 mb-8'> 
        <div className='w-full h-auto flex items-center gap-x-2'>
            <CheckSquare className='w-5 h-5 text-indigo-600'/>
            <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                Get access to all gym classes
            </p>
         </div>
         <div className='w-full h-auto flex items-center gap-x-2'>
            <CheckSquare className='w-5 h-5 text-indigo-600'/>
            <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                Unlimited yoga classess
            </p>
         </div>
         <div className='w-full h-auto flex items-center gap-x-2'>
            <CheckSquare className='w-5 h-5 text-indigo-600'/>
            <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                Use of lockers
            </p>
         </div>
         <div className='w-full h-auto flex items-center gap-x-2'>
            <CheckSquare className='w-5 h-5 text-indigo-600'/>
            <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                Weekedy pool access
            </p>
         </div>
         <div className='w-full h-auto flex items-center gap-x-2'>
            <CheckSquare className='w-5 h-5 text-indigo-600'/>
            <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                Get a Meal
            </p>
         </div>
        </div>
        <PrimaryBtn className="w-56 h-11 text-g justify-center
        font-semibold tracking-wider mb-3  uppercase rounded-full" >
            Select 
            </PrimaryBtn>
         </div>

            {/*   VIP Plan  */}



         <div className='lg:w-[28%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10
         py-10 bg-black/10 rounded-lg border-[6px] border-gray-600 *:hover:border-indigo-600/40
         hover:bg-gray-600/10 ease-out duration-700 cursor-pointer'>
         <h2 className='lg:text-4xl md:text-4xl sm:text-3xl text-3xl
          text-white font-semibold mb-5'>
             VIP Plan</h2>    
         <h1 className='text-5xl text-indigo-600 font-bold mb-3 tracking-wide'>
            $365.00{"  "}
            <span  className='lg:text-5xl md:text-5xl sm:text-4xl text-4xl text-gray-300
            font-medium tracking-normal'> / month</span>
         </h1>
         <hr className='border-gray-600/40 my-7'/>
        <div className='w-full h-auto space-y-2 mb-8'> 
        <div className='w-full h-auto flex items-center gap-x-2'>
            <CheckSquare className='w-5 h-5 text-indigo-600'/>
            <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                Get access to all gym classes
            </p>
         </div>
         <div className='w-full h-auto flex items-center gap-x-2'>
            <CheckSquare className='w-5 h-5 text-indigo-600'/>
            <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                Unlimited yoga classess
            </p>
         </div>
         <div className='w-full h-auto flex items-center gap-x-2'>
            <CheckSquare className='w-5 h-5 text-indigo-600'/>
            <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                Use of lockers
            </p>
         </div>
         <div className='w-full h-auto flex items-center gap-x-2'>
            <CheckSquare className='w-5 h-5 text-indigo-600'/>
            <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                Weekedy pool access
            </p>
         </div>
         <div className='w-full h-auto flex items-center gap-x-2'>
            <CheckSquare className='w-5 h-5 text-indigo-600'/>
            <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
               Get a Two meals
            </p>
         </div>
         <div className='w-full h-auto flex items-center gap-x-2'>
            <CheckSquare className='w-5 h-5 text-indigo-600'/>
            <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                Free gym t-shirt
            </p>
         </div>
         <div className='w-full h-auto flex items-center gap-x-2'>
            <CheckSquare className='w-5 h-5 text-indigo-600'/>
            <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                Perssonal trainer for 3 days a week
            </p>
         </div>
        </div>
        <PrimaryBtn className="h-11 text-g justify-center items-center
        font-semibold tracking-wider mb-3 w-56  uppercase rounded-full" >
            Select 
            </PrimaryBtn>
         </div>

       </div>
       </div>
    </>
  )
}

export default PricingPlan
