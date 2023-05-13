import './App.css'
import Navbar from './Componentes/Navbar'
import { Inicio } from './Componentes/Inicio'
import Banner from './Componentes/Banner'
import { Footer } from "./Componentes/Footer"


function App() {
  return (
    <div className='grid sm:grid-cols-1 lg:grid-cols-1 text-center gap-4'>
    <header>
      <Navbar/>
      <Banner/>
    </header>
    <main>
    <Inicio/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </div>
  )
}

export default App
