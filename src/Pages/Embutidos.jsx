import React from 'react'
import Navbar from '../Componentes/Navbar'
import Banner from '../Componentes/Banner'
import { Footer } from '../Componentes/Footer'
import {SoloEmbutidos} from './Componets/SoloEmbutidos'

export const Embutidos = () => {
  return (
    <div className='grid sm:grid-cols-1 lg:grid-cols-1 text-center gap-4'>
    <header>
      <Navbar/>
      <Banner/>
    </header>
    <main>
      <SoloEmbutidos/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </div>
  )
}
