import React from 'react'
import Destacados from './ProductosDestacados/Destacados';
import Ofertas from './ProductosDestacados/Ofertas';
import Marcas from './ProductosDestacados/Marcas';

export const Inicio = () => {
  return (
    <div className='grid sm:grid-cols-1 lg:grid-cols-1 text-center gap-4'>
      <div className='mt-5 pt-5'>
      {/* <h1 className='text-4xl'>Productos destacados</h1> */}
      <Destacados/>
      </div>
      <div className="bg-[#09090b] ">
        <h1 className='mt-16 text-3xl font-bold tracking-tight text-white sm:text-4xl'>Ofertas de la semana</h1>
        <Ofertas/>
      </div>
      <div>
        <Marcas/>
      </div>
    </div>
  )
}
