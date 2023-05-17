// import React from 'react'

// export const Footer = () => {
//   return (
//     <div className="bg-black py-2">
//       <h1 className='text-white text-2xl mt-4'>Fiambreria Maradona</h1>
//         <h1 className='text-white py-2 px-2'>Horarios de atencion 9 a 13:30 y 17 a 22 lunes a sabados <br /> Sarmiento y larrea 0000</h1>
//       </div>
//   )
// }
import ImagenesNav from '../assets/ImagenesNav'
import { Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
 
export default function Footer() {
  return (
    <footer className="w-full bg-black p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-black text-center md:justify-between">
        <img src={ImagenesNav.img1} alt="logo-ct" className="h-12" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Nosotros
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Licencia
            </Typography>
          </li>
          <li>
          <Link to='/Contacto' > <Typography
              as="a"
              href="/Contacto"
              color="gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contactanos
            </Typography> </Link>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
    </footer>
  );
}
