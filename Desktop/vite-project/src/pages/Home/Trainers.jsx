import React from 'react'
import { Dumbbell, MoveRight } from 'lucide-react'
const Trainers = () => {
    const trainersData = [
        {
          id: 1,
          trainerImg: "https://ifbb-academy.com/wp-content/uploads/2020/05/master.jpg",
          name: "Dr. John Smith",
          role: "Body Building Coach",
        },
        {
          id: 2,
          trainerImg: "https://www.julienutrition.com/wp-content/uploads/2023/02/Personal-Trainer-Strength-Conditioning-and-Fitness-Coach-JM-Nutrition.jpg",
          name: "Dr. John Doe",
          role: "Gym Trainer",
        },
        {
          id: 3,
          trainerImg: "https://www.datocms-assets.com/61076/1693274798-pt-at-the-gym.jpg",
          name: "Mrs. Lilly Doe",
          role: "Prof. fitness coach",
        },
        {
          id: 4,
          trainerImg: "https://images.unsplash.com/photo-1542468019-550cb643a5e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UHJvZi4lMjB3cmVzdGxpbmclMjBjb2FjaHxlbnwwfHwwfHx8MA%3D%3D",
          name: "Roman Reigns",
          role: "Prof. wrestling coach",
        },
      ];
  return (
    <>
            <div className=" div1 bg-black/90 rounded-md w-full h-auto flex justify-center items-center flex-col 
      lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
       <h6 className='text-4xl font-medium text-gray-200 flex items-center gap-x-2 mb-6'>
       <Dumbbell className='w-6 h-6 -rotate-45 text-indigo-600' />
          Our Expert Trainers
       </h6>
       <div className='w-full h-auto flex justify-center items-center 
       lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-3 lg:gap-y-8 md:gap-y-6 sm:gap-y-4 gap-y-3
        rounded-xl flex-wrap mb-10'>
        {trainersData.map((data) => (
        <div key={data.id} className='lg:w-[23%] md:w-[48%] sm:w-[48%] w-full lg:h-[50vh]
        md:h-[53vh] sm:h-[58vh] h-[60vh] rounded-xl overflow-hidden relative'>
            <img className='w-full h-full object-cover' 
            src={data.trainerImg}/>

            <div className='w-full h-auto bg-gray-900/50 absolute bottom-0 left-0
            py-4 px-2 flex items-center justify-center flex-col'>
                <h1 className='text-xl text-white font-semibold'>{data.name}</h1>
                <p className='text-sm text-gray-300'>{data.role}/</p>
            </div>
        </div>
        ))}
       </div>
   
      </div>
    </>
  )
}

export default Trainers
