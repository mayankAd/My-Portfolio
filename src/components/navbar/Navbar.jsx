import Button from '../button/Button'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
    <div className={`${styles.container}`}>
        <div className={`${styles.logo}`}>
            <a href="#"><img src="images/logo2.png" alt="" /></a>
            
        </div>
        <div className={`${styles.links}`}>
            <a href="#projects_section"><Button  text={"Projects"} color={"black"} border_={"none"}/></a>
            <Button text={"Say Hello"}/>
        </div>
    </div>
    </>
  )
}

export default Navbar