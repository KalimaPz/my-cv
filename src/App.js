import React, { useEffect } from 'react'
import SkillCard from './components/SkillCard'
import BioCard from './components/BioCard'
import './App.css'
import ExpCard from './components/ExpCard'
import Footer from './components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css';
import ProfilePicture from './components/ProfilePicture'
import { Divider } from 'antd'

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (

    <div >
      <div className="App">
        <p data-aos="fade-up"><ProfilePicture /></p>
        <p data-aos="fade-up"><BioCard /></p>
        <p><ExpCard /></p>
        <p><SkillCard /></p>
      </div>
      <div data-aos="fade-right">
        <p><Divider>Contact Me</Divider></p>
        <p><Footer /></p>
      </div>

    </div>

  )
}

export default App