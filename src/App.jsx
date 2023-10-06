import React, { createContext, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero_section from './components/hero_section/Hero_section'
import './App.css'
import Section_two from './components/section_two/Section_two'
import My_projects from './components/my_projects/My_projects'
import Footer from './components/footer/Footer'
import Message_section from './components/message_section/Message_section'


export const ThemeContext = createContext(null);



 const App = () => {
  const[theme, setTheme] = useState("light");

  

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div style={{backgroundColor:theme==="dark"?"black":"white"}}>
    <Navbar />
    <Hero_section/>
    <Section_two/>
    <My_projects/>
    <Message_section/>
    <Footer/>
    </div>
    </ThemeContext.Provider>
  )
  }

export default App