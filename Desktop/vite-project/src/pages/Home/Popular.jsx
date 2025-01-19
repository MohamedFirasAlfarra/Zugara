import React from 'react'
import { Dumbbell } from 'lucide-react'

const Popular = () => {
    const exercisesData = [
        {
          id: 1,
          exerciseImg: "https://www.dancingfads.com/wp-content/uploads/2023/07/Durham-Dance-Studio-Warm-Up-Exercises.webp",
          name: "Warm up",
          duration: 15,
          sets: 3,
          calories: 100,
        },
        {
          id: 2,
          exerciseImg: "https://cdn.shopify.com/s/files/1/0618/9462/3460/files/SW2.jpg",
          name: "Shoulder Workout",
          duration: 20,
          sets: 4,
          calories: 150,
        },
        {
          id: 3,
          exerciseImg: "https://api.croq-kilos.com/media/cache/resolve/article_banner_webp/uploads/medias/65fafb904caa3371103275.jpg",
          name: "Yoga Session",
          duration: 55,
          sets: 5,
          calories: 250,
        },
        {
          id: 4,
          exerciseImg: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2023/11/Leg-Day-Workout.jpg?fit=1988%2C1328&ssl=1",
          name: "Leg Workout",
          duration: 18,
          sets: 4,
          calories: 120,
        },
      ];
      
  return (
    <> 
       <div className="div1 w-full h-auto flex justify-center items-center flex-col 
      lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
       <h6 className='text-4xl font-medium text-gray-200 flex items-center gap-x-2 mb-6'>
       <Dumbbell className='w-6 h-6 -rotate-45 text-indigo-600' />
          Our Popular Exercises
       </h6>

       <div className='w-full h-auto flex items-center gap-x-5 gap-y-6
       lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap'>
         {exercisesData.map((data) => (
        <div key={data.id} className='lg:w-[24%] md:w-[48%] sm:w-[48%] w-full h-auto rounded-lg overflow-hidden
        hover:shadow hover:shadow-indigo-900/40 ease-out duration-700 cursor-pointer'>
            <img src={data.exerciseImg} 
            className='w-full lg:h-[30vh] md:h-[33vh] sm:h-[38vh] h-[40vh] 
            object-cover rounded-lg'/>
            <div className='w-full h-auto py-4 px-3'>
                <h1 className='text-lg text-white font-semibold mb-1'>{data.name}</h1>
                <div className='w-full h-auto flex items-center gap-x-2'>

                    <p className='text-sm text-gray-300'>{data.duration} min</p>
                    <span className='w-1 h-1 rounded-full bg-gray-600'></span>
                    <p className='text-sm text-gray-300'>{data.sets} sets</p>
                    <span className='w-1 h-1 rounded-full bg-gray-600'></span>
                    <p className='text-sm text-gray-300'>{data.calories} calories</p>
                    <span className='w-1 h-1 rounded-full bg-gray-600'></span>

                </div>
            </div>
        </div>
         ))}
       </div>
       </div>
    </>
  )
}

export default Popular
