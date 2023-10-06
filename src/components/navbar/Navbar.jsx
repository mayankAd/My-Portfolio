import { useContext } from 'react'
import Button from '../button/Button'
import styles from './Navbar.module.css'
import { ThemeContext } from '../../App'
import Theme_btn from '../theme_btn/Theme_btn'

const Navbar = () => {
  const data = useContext(ThemeContext)
  return (
    <>
    <div className={`${styles.container}`} style={{backgroundColor:data.theme==="dark"?"black":"white", color:data.theme==="dark"?"white":"black"}}>
        <div className={`${styles.logo}`}>
            <a href="#about_me"><img src="images/mayanklogo.png" alt="" /></a>
            
        </div>
        <div className={`${styles.links}`}>
            <Theme_btn/>
            <a href="#projects_section"><button className='text-lg hover:text-violet-500'>Projects</button></a>
            <a href='#Message_section'><Button text={"Say Hello"}/></a>
        </div>
    </div>
    </>
  )
}

export default Navbar