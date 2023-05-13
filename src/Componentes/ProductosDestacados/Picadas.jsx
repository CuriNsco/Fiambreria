import React from 'react'

export const Picadas = () => {
  return (
    <div className='grid mt-4 sm:mt-12 sm:border sm:border-black sm:rounded-2xl sm:grid grid-cols-1 sm:grid-cols-3 sm:h-80'>
        <div className='grid h-40 my-2 sm:my-0 border border-black sm:h-80 relative sm:justify-items-center sm:items-center sm:relative sm:rounded-l-2xl bg-yellow-200'>
            <img src="./Picadas/Picada4.PNG" alt="Picada2" className='h-40 w-full absolute sm:absolute sm:rounded-l-2xl object-cover sm:h-80 '/>
        </div>
      



        <div className='grid h-40  my-2 border border-black sm:my-0 sm:h-80 relative sm:justify-items-center sm:items-center sm:relative bg-blue-200'>
            <img src="./Picadas/Picada2.PNG" alt="" className='h-40 w-full sm:h-80 object-cover '/>
        </div>
       



        <div className='grid h-40  my-2 border border-black sm:my-0 sm:h-80 relative sm:justify-items-center sm:items-center sm:relative sm:rounded-r-2xl object-cover'>
            <img src="./Picadas/Picada6.PNG" alt="" className=' h-40 w-full object-cover  sm:h-80 sm:object-cover sm:rounded-r-2xl '/>
        </div>
        
    </div>
  )
}

