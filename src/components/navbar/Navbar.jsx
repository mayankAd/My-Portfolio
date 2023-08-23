import Button from '../button/Button'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
    <div className={`${styles.container}`}>
        <div className={`${styles.logo}`}>
            <a href="#"><img src="images/logo1.png" alt="" /></a>
            
        </div>
        <div className={`${styles.links}`}>
            <Button text={"Projects"}/>
            <Button text={"Say Hello"}/>
        </div>
    </div>
    </>
  )
}

export default Navbar