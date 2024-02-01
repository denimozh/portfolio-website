import React, {useEffect} from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import AnimatedCursor from 'react-animated-cursor'
import Slider from './Components/Slider'

const App = () => {
    
  return (
    <div>
        <div className=' bg-black text-white'>
            <Navbar/>
            <Hero/>
            <Slider/>
            <Projects/>
            <About/>
            <Contact/>
            <Footer/>
        </div>
    </div>
  )
}

export default App