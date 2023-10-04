import Button from '../button/Button'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
    <div className={`${styles.container}`}>
        <div className={`${styles.logo}`}>
            <a href="#about_me"><img src="images/mylogo2.png" alt="" /></a>
            
        </div>
        <div className={`${styles.links}`}>
            <a href="#projects_section"><button className='text-lg hover:text-violet-500'>Projects</button></a>
            <a href='#Message_section'><Button text={"Say Hello"}/></a>
        </div>
    </div>
    </>
  )
}

export default Navbar