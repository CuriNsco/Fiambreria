// import React from 'react'
// import { Spinner } from "@material-tailwind/react";

// export const Picadas = () => {
//   return (
//     <div className='grid mt-4 sm:mt-12 sm:border sm:border-black sm:rounded-2xl sm:grid grid-cols-1 sm:grid-cols-3 sm:h-80'>
//         <div className='grid h-40 my-2 sm:my-0 border border-black sm:h-80 relative sm:justify-items-center sm:items-center sm:relative sm:rounded-l-2xl bg-yellow-200'>
//             <img src="./Picadas/Picada4.PNG" alt="Picada2" className='h-40 w-full absolute sm:absolute sm:rounded-l-2xl object-cover sm:h-80 '/>
//         </div>
      



//         <div className='grid h-40  my-2 border border-black sm:my-0 sm:h-80 relative sm:justify-items-center sm:items-center sm:relative bg-blue-200'>
//             <img src="./Picadas/Picada2.PNG" alt="" className='h-40 w-full sm:h-80 object-cover '/>
//         </div>
       



//         <div className='grid h-40  my-2 border border-black sm:my-0 sm:h-80 relative sm:justify-items-center sm:items-center sm:relative sm:rounded-r-2xl object-cover'>
//             <img src="./Picadas/Picada6.PNG" alt="" className=' h-40 w-full object-cover  sm:h-80 sm:object-cover sm:rounded-r-2xl '/>
//         </div>
        
//     </div>
//   )
// }

import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
 
export default function Example() {
  return (
    <Carousel
      className="rounded-2xl mt-16 h-96 "
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 -translate-y-2/4 left-4"
        >
          <ArrowLeftIcon strokeWidth={2} className="w-6 h-6" />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 -translate-y-2/4 !right-4"
        >
          <ArrowRightIcon strokeWidth={2} className="w-6 h-6" />
        </IconButton>
      )}
    >
      <img
        src="https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/whatsapp-image-2022-05-07-at-5-01-51-pm-11-5c898cba7893f19c4f16519539109554-1024-1024.jpeg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/la-siciliana1-7b47c95cd8a5f9071d16209318133617-1024-1024.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://d2r9epyceweg5n.cloudfront.net/stores/001/651/135/products/1620930722085_la-toscana-11-f4c82ebd7fe5edd35516209316111833-1024-1024.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}

