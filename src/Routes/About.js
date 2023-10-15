import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer"
import HeroImg2 from '../Components/HeroImg2';
import AboutContent from '../Components/AboutContent';
import Education from '../Components/Education';
import Skills from '../Components/Skills';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading = "ABOUT ME" text="I am an engineering student with strong understanding of DSA and front end development."/>
      <AboutContent/>
      <Education/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default About
