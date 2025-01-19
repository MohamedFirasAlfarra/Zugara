import React from 'react'
import Input from '../../components/Form/Input'
import Textarea from '../../components/Form/Textarea'
import { Dumbbell } from 'lucide-react'
import PrimaryBtn from '../../components/Button/PrimaryBtn'

const Contacts = () => {
  return (
    <>
      <div className="div2 w-full h-auto flex justify-center items-center flex-col 
      lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
       <h6 className='text-5xl font-medium text-gray-200 flex items-center gap-x-2 mb-6'>
       <Dumbbell className='w-6 h-6 -rotate-45 text-indigo-600' />
       Ask About GYM
       </h6>

       <div className='w-full h-auto flex items-center gap-x-8 lg:gap-y-8 md:gap-y-8
       sm:gap-y-5 gap-y-4 flex-col lg:p-7 md:p-7 sm:p-4 p-3'>
        <form 
         action="https://getform.io/f/broolgea"
         method="POST"
         className="xl:pl-10 2xl:pl-20 py-10 w-full h-auto mb-5">
        <div className='w-full h-auto flex items-center lg:gap-x-8 md:gap-x-4
       sm:gapx-x-4 gap-x-3 lg:gap-y-8 md:gap-y-8 sm:gap-y-5 gap-y-4 lg:flex-nowrap
       md:flex-nowrap sm:flex-wrap flex-wrap'>
        <div className='lg:w-[32%] md:w-[32%] sm:w-[48%] w-full h-auto mb-10'>
          <Input type="text" 
            id="FullName" 
            name="FullName"
            placeholder="Enter Your FullName.." 
            className="w-full h-12 px-4"/>
        </div>
        <div className='lg:w-[32%] md:w-[32%] sm:w-[48%] w-full h-auto mb-10'>
          <Input type="email" 
            id="Email" 
            name="Email"
            placeholder="Enter Your Email.." 
            className="w-full h-12 px-4"/>
        </div>
        <div className='lg:w-[32%] md:w-[32%] sm:w-[48%] w-full h-auto mb-10'>
          <Input type="text" 
            id="Subject" 
            name="Subject"
            placeholder="Enter Your Subject.." 
            className="w-full h-12 px-4"/>
        </div>
       </div>
       <Textarea 
       id="message"
       name="message"
       placeholder="Message"
       className="w-full px-4 mb-10"
        />
        <PrimaryBtn className="lg:w-auto md:w-auto sm:w-[75%] w-full
        uppercase rounded-xl px-8 py-3"> Send Message </PrimaryBtn>
        </form>
       </div>
    </div>
    </>
  )
}

export default Contacts
