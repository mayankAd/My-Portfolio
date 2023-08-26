import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero_section from './components/hero_section/Hero_section'
import './App.css'
import Section_two from './components/section_two/Section_two'
import My_projects from './components/my_projects/My_projects'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero_section/>
    <Section_two/>
    <My_projects/>
    <Footer/>
    </>
  )
}

export default App