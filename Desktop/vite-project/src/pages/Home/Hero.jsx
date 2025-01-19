import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay,Navigation } from 'swiper/modules';
import PrimaryBtn from '../../components/Button/PrimaryBtn';
function Hero() {

    const swiperData = [
        {
          id: 1,
          bgImg: "https://www.shutterstock.com/image-photo/muscular-man-bodybuilder-training-gym-600nw-2196453277.jpg",
          slogan: "Keep your body",
          title: "Burning",
          desc: "Get ready to burn off some serious fat with our high quality products.",
        },
        {
          id: 2,
          bgImg: "https://as2.ftcdn.net/v2/jpg/03/16/58/57/1000_F_316585784_XykKca4Uetd5RuelyAfGmHPnDQMxA6vX.jpg",
          slogan: "Just Believe In",
          title: "Yourself",
          desc: "We are here to help you achieve your goals.",
        },
        {
          id: 3,
          bgImg: "https://www.wandel.nl/media/oehiphhw/header-meer-uit-je-wandeling-halen-start-met-yoga.jpg?center=0.55388540031397171,0.42825709826721237&mode=crop&width=1280&height=640&rnd=132810302641970000&quality=90&format=jpg",
          slogan: "Grow Your Body",
          title: "Strength",
          desc: "Make your body stronger with our high quality products.",
        },
      ];
  return (
    <>
      <div className="w-full h-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        navigation={true}
        modules={[Autoplay,Navigation]}
        className=" div2 mySwiper w-full h-auto"
      >
        {swiperData.map((data) => (
        <SwiperSlide 
        key={data.id}
        className='w-full h-[70vh] relative '
         style={{
            backgroundImage: 
            `url(${data.bgImg})`, 
            backgroundSize : 'cover' ,
            backgroundPosition : 'center' ,
            backgroundRepeat : 'no-repeat'
            }}>
               <div className="w-full h-full bg-black/70 absolute  top-0 left-0 -z-10"></div>
               <div className="w-full h-full flex items-center justify-center flex-col z-10
               lg:px-24 md:px-16 sm:px-6 px-4">
                <h5 className=' lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-indigo-400 font-semibold mb-2 uppercase'>
                   {data.slogan}</h5>
                    <h1 className=' lg:text-8xl md:text-7xl sm:text-5xl text-5xl font-bold
                     text-white mb-4 uppercase'>{data.title}</h1>

                     <p className='lg:text-lg md:text-base sm:text-base text-base text-gray-500 font-medium mb-6 text-center'>
                       {data.desc}
                     </p>
                    
               </div>
        </SwiperSlide>

        ))}
    
      </Swiper>
      <div className='w-full h-auto flex items-center lg:justify-between
      md:justify-between sm:justify-center justify-center lg:gap-7 
      md:gap-5 lg:px-24 sm:px-6 px-6  flex-wrap bg-black/100'>
        <div className='flex items-center justify-center flex-col rounded-md ease-out 
        duration-700 cursor-pointer lg:w-fit md-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10
        bg-black/10 hover:bg-zinc-700 hover:text-blue-50 '>
            <h5 className='text-4xl text-indigo-400 font-semibold mb-2 uppercase'>
                1200+
            </h5>
            <p className='text-lg text-gray-600 font-medium'>Members</p>
             </div>
        <div className='flex items-center justify-center flex-col rounded-md ease-out 
        duration-700 cursor-pointer lg:w-fit md-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10
        bg-black/10 hover:bg-zinc-700 hover:text-blue-50 '>
            <h5 className='text-4xl text-indigo-400 font-semibold mb-2 uppercase'>
                120+
            </h5>
            <p className='text-lg text-gray-600 font-medium'>Expert Trainers</p>
             </div>
        <div className='flex items-center justify-center flex-col rounded-md ease-out 
        duration-700 cursor-pointer lg:w-fit md-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10
        bg-black/10 hover:bg-zinc-700 hover:text-blue-50 '>
            <h5 className='text-4xl text-indigo-400 font-semibold mb-2 uppercase'>
                13+
            </h5>
            <p className='text-lg text-gray-600 font-medium'>Years of Experiencs</p>
             </div>
        <div className='flex items-center justify-center flex-col rounded-md ease-out 
        duration-700 cursor-pointer lg:w-fit md-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10
        bg-black/10 hover:bg-zinc-700 hover:text-blue-50 '>
            <h5 className='text-4xl text-indigo-400 font-semibold mb-2 uppercase'>
                368+
            </h5>
            <p className='text-lg text-gray-600 font-medium'>GYMs</p>
             </div>
      </div>
      </div>
    </>
  )
}

export default Hero
