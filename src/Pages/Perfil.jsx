import React from 'react'
import  Footer  from '../Componentes/Footer'
import Navbar from '../Componentes/Navbar'
import RegistroPerfil from './Componets/Registroperfil'
import Newsletter from './Componets/Newsletter'

export const Perfil = () => {
  return (
    <div className='grid sm:grid-cols-1 lg:grid-cols-1 text-center gap-4'>
        <header>
            <Navbar/>
        </header>
        <main>
            <RegistroPerfil/> 
        </main>
        <footer>
        <Newsletter/>
            <Footer/>
        </footer>
    </div>
  )
}
