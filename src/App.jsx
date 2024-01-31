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
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "/scripts/cursors.js";
        script.async = true;
        document.body.appendChild(script);
      return () => {
          document.body.removeChild(script);
        }
      }, []);

  return (
    <div>
        <AnimatedCursor innerSize={14}
      outerSize={200}
      color='255, 255, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2} outerStyle={{
        mixBlendMode: 'exclusion'
      }} trailingSpeed={10}	/>
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