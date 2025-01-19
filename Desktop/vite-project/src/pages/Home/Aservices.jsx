import React from 'react'
import { Dumbbell, MoveRight } from 'lucide-react'

import TertiaryLink from '../../components/LinkBtn/TertiaryLink';
import SecondaryBtn from '../../components/LinkBtn/SecondaryLink';
// import { data } from 'autoprefixer';
const Aservices = () => {
  const services = [
    {
      id: 1,
      serviceImg: "https://fitnessdoorn.nl/wp-content/uploads/2023/07/shutterstock_1613101567-scaled.jpg",
      icon: Dumbbell,
      title: "Fitness",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
      id: 2,
      serviceImg: "https://integrishealth.org/-/media/blog/2023/oyh_mindful-yoga.ashx?revision=839e7ba3-fcc3-463b-aae3-c0f13f92de22",
      icon: Dumbbell,
      title: "Yoga",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
      id: 3,
      serviceImg: "https://edge.one.fit/image/partner/image/14642/9aa4e81d-ebe5-47cf-99b1-6d83e307be30.jpg?w=1680",
      icon: Dumbbell,
      title: "Gym",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
      id: 4,
      serviceImg: "https://sport.brussels/media/vpsocr5v/716.jpg?center=0.39709694659920181,0.36833333333333335&mode=crop&rnd=132445741378830000&width=772&height=454",
      icon: Dumbbell,
      title: "Aerobics",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
      id: 5,
      serviceImg: "https://www.toprank.com/wp-content/uploads/2024/09/original-740D4C86-EEB8-4D78-8138-293CDD74F4B1.jpeg",
      icon: Dumbbell,
      title: "Boxing",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },

    {
      id: 6,
      serviceImg: "https://t4.ftcdn.net/jpg/03/23/50/79/360_F_323507957_0gQGkUqu7ZStF7SgJ0JssJY7tnM0BGG2.jpg",
      icon: Dumbbell,
      title: "Body Building",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
      id: 7,
      serviceImg: "https://cdn-magazine.nutrabay.com/wp-content/uploads/2024/04/workout-scene-fitness-enthusiasts-diving-deep-into-intense-training-bathed-dynamic-lighting-scaled.jpg",
      icon: Dumbbell,
      title: "Zumba",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
  ];
  return (
    <>
      <div className="bg-black/90 rounded-md w-full h-auto flex justify-center items-center flex-col 
      lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
       <h6 className='text-4xl font-medium text-gray-200 flex items-center gap-x-2 mb-6'>
       <Dumbbell className='w-6 h-6 -rotate-45 text-indigo-600' />
          Our Services
       </h6>
       <div className='w-full h-auto flex justify-center items-center gap-x-4  rounded-xl
       gap-y-5 flex-wrap mb-10'>
        {services.map((data) => (
        <div key={data.id} className='lg:w-[24%] md:w-[48%] sm:w-[48%] w-full  rounded-3xl
        lg:h-[50vh] md:h-[53vh] sm:h-[58vh] h-[60vh] hover:-translate-y-2 ease-out duration-500' 
        style={{
          backgroundImage: 
         `url(${data.serviceImg})` ,
          backgroundSize : 'cover' ,
          backgroundPosition : 'center' ,
          backgroundRepeat : 'no-repeat'
          }}
          >
            <div className='w-full h-full bg-black/80 absolute top-0 left-0 -z-10'></div>
            <div className='w-full h-full flex items-center justify-center flex-col
            text-white p-4 z-50'>
              <div className='w-14 h-14 rounded-full bg-indigo-600 border-4 border-indigo-600/80
               flex items-center justify-center mb-5'>
                <Dumbbell className='w-6 h-6 text-white' />
               </div>
              <h1 className="text-3xl text-gray-100 font-semibold text-center mb-4 " >
                {data.title}
                </h1> 
                <p className=' text-md text-gray-400 font-normal text-center mb-4'>
                  {data.desc}
                </p>

                <SecondaryBtn className="lg:w-[70%] md:w-[48%] sm:w-[48%] w-[48%] h-12 text-center p-2
                bg-slate-200 font-extrabold flex justify-center rounded-full">
                  Become a Members
                  </SecondaryBtn>

                {/* <TertiaryLink className="text-xl" >Read More
                  <MoveRight className='w-4 h-4 ' />
                </TertiaryLink> */}
                </div>

          </div>
        ))}
       </div>
      </div>
    </>
  )
}

export default Aservices
