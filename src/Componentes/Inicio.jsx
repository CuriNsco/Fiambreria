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
      <div className="bg-black ">
        <h1 className='text-white text-4xl pt-16'>Ofertas</h1>
        <Ofertas/>
      </div>
      <div>
        <Marcas/>
      </div>
    </div>
  )
}
