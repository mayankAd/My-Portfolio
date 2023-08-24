import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero_section from './components/hero_section/Hero_section'
import './App.css'
import About_me from './components/about_me/About_me'
import Tech_stack from './components/tech_stack/Tech_stack'
import Section_two from './components/section_two/Section_two'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero_section/>
    <Section_two/>
    </>
  )
}

export default App