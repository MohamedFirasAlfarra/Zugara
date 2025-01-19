import { Dumbbell } from 'lucide-react'
import React from 'react'
import SecondaryBtn from '../../components/Button/SecondaryBtn';

const About = () => {
  return (
    <>
      <div className='div1 w-full h-full flex items-center justify-between gap-7 lg:py-16
      md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 '>
       
        <div className='w-full h-auto text-center lg:text-start 
        md:text-start sm:text-start lg:w-[50%] md:w-full sm:w-full'>
            <h6 className='text-5xl font-medium text-gray-200 flex items-center lg:justify-start
            md:justify-start sm:justify-center justify-center mb-3 gap-x-2'>
                <Dumbbell className='w-6 h-6 -rotate-45 text-indigo-600' />
                About Us
            </h6>
            <h1 className='lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold text-gray-200
            mb-4 leading-normal pr-5 lg:pe-5 md:pe-4 sm:pe -1 pe-0'>
                Effortless Strength, Timely Gains: Building Better Bodies, Faster
            </h1>
            <p className='lg:text-base md:text-base sm:text-sm text-gray-500 font-medium mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Id maiores tenetur dolorem velit! Id consequatur fugiat
                 laborum quae perferendis officia quidem vel reiciendis
                  voluptas ad, fuga aperiam iure ipsa dolorem.
            </p>
            <p className='lg:text-base md:text-base sm:text-sm text-gray-500 font-medium mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Id maiores tenetur dolorem velit! Id consequatur fugiat
                 laborum quae perferendis officia quidem vel reiciendis
                  voluptas ad, fuga aperiam iure ipsa dolorem.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Laborum sit earum natus delectus veniam nisi minima aperiam, 
                  veritatis nulla. Sit eveniet itaque suscipit corrupti beatae 
                  optio doloremque fugiat dolore consequuntur.
            </p>
            {/* <SecondaryBtn className="lg:w-auto md:w-auto sm:w-full w-full 
            px-7 py-2 text-base font-medium uppercase justify-center">Become a Members</SecondaryBtn> */}
        </div>
        <div className='lg-w[38%] md:w-full sm:w-full w-full h-100 bg-white relative overflow-hidden rounded-2xl'>
        <img src="https://media.istockphoto.com/id/1316173356/nl/foto/de-gespierde-mens-trekt-een-halter-naar-zijn-maag-bodybuilding-en-powerlifting-concept.jpg?s=612x612&w=0&k=20&c=LiAzK_Xr4E4Ny3xje_PThMI0jrTNffs1bdCdqmaX03w="
             className="w-full lg:h-[60vh] md:h-[60vh] sm:h-[60vh] h-[60vh] object-cover mr-8" />
        </div>
      </div>
    </>
  )
}

export default About
