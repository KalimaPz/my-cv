import React, { useEffect } from 'react'
import SkillCard from './components/SkillCard'
import BioCard from './components/BioCard'
import './App.css'
import ExpCard from './components/ExpCard'
import AOS from 'aos'
import 'aos/dist/aos.css';
import ProfilePicture from './components/ProfilePicture'

const App = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return(
    <div  className="App">
      <div data-aos="fade-down"><ProfilePicture/></div>
      <div data-aos="fade-up-right"><BioCard /></div>
      <br/>
      <div data-aos="fade-up"><ExpCard/></div>
      <div data-aos="fade-right"><SkillCard/></div>
    </div>
  )
}

export default App