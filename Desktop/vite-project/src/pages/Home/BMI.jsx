import React, { useState } from 'react'
import { Dumbbell } from 'lucide-react'
import Lable from '../../components/Label/Label';
import Input from '../../components/Form/Input';
import SecondaryBtn from '../../components/Button/SecondaryBtn';

const BMI = () => {
  const [weight , setWeight] = useState("") ;
  const [height , setHeight] = useState("") ;
  const [bmi , setBMI] = useState(null) ;

  const calculateBMI = ()=> {
    const bmi =(weight / ((height * height) / 10000)).toFixed(2);
    setBMI(bmi);
  }
  return (
    <>
      <div className='bg-black/90 w-full h-auto flex items-center lg:py-16 md:py-14 sm:py-12 py-10
      lg:px-24 md:px-16 sm:px-6 px-4'>
        <div className="w-full h-auto flex items-center justify-center flex-col">
        <h6 className='lg:text-lg md:text-lg sm:text-base text-base font-medium
         text-gray-200 flex items-center mb-3 gap-x-2 bg-black/20 rounded-t-md
         px-2 py-4'>
                <Dumbbell className='w-6 h-6 -rotate-45 text-indigo-600' />
                Calculate Your BMI
            </h6>
            <div className='w-full h-auto flex items-end justify-center bg-black/20 rounded-xl
            lg:gap-5 md:gap-5 sm:gap-3 gap-2 py-10 lg:px-0 sm:px-2 px-4 flex-wrap'>
              <div className='text-zinc-100 font-bold text-2xl mb-4 mt-4 lg:w-[25%]
               md:w-[40%] sm:w-[50%] w-full h-auto p-2'>
                
                  <label htmlFor='weight'> Weight (kg)</label>
                  <Input id="weight" name="weight" type="number" 
                  placeholder="Enter Your weight" 
                  value={weight}
                  onChange={(e) => {setWeight(e.target.value)}}
                  >weight </Input>
            </div>

              <div className='text-zinc-100 font-bold text-2xl mb-4 mt-4 lg:w-[25%]
               md:w-[40%] sm:w-[50%] w-full h-auto p-2'>
                <label htmlFor='weight'> Height (cm)</label>
                  <Input id="height" name="height" type="number"
                   placeholder="Enter Your height"
                   value={height}
                  onChange={(e) => {setHeight(e.target.value)}}>
                     Height</Input>
            </div>

              <div className='text-zinc-100 font-bold text-2xl mb-4 mt-4
               lg:w-[20%] md:w-[35%] sm:w-[50%] w-full h-auto p-2'>
               <SecondaryBtn onClick={calculateBMI} type="submit" className="w-full h-11 justify-center" >Calculate BMI</SecondaryBtn>
            </div>
          </div>
          {bmi !== null && (
            <div className='bg-black rounded-b-md px-6 py-2.5'>
              <p className='text-indigo-600'>
                Your BMI : <span className='font-bold'>{bmi}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default BMI;
