import React from 'react'
import Navbar from '../Componentes/Navbar'
import Banner from '../Componentes/Banner'
import { Footer } from '../Componentes/Footer'
import {SoloQuesos} from './Componets/SoloQuesos'

export const Quesos = () => {
  return (
    <div className='grid sm:grid-cols-1 lg:grid-cols-1 text-center gap-4'>
    <header>
      <Navbar/>
      <Banner/>
    </header>
    <main>
      <SoloQuesos/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </div>
  )
}
