import { useContext } from 'react'
import styles from './Tech_stack.module.css'
import { ThemeContext } from '../../App'

const Tech_stack = () => {

  const data = useContext(ThemeContext);

  return (
    <div className={`${styles.container}`} style={{backgroundColor:data.theme==="dark"?"rgb(57, 57, 57)":"white"}}>
      <h2  style={{color:data.theme==="dark"?"white":"black"}}>Tech Stack</h2>
      <div className={`${styles.techs}`}>
        <div className={`${styles.img_container}`}><img src="images/html.png" alt="" /></div>
        <div className={`${styles.img_container}`}><img src="images/CSS.png" alt="" /></div>
        <div className={`${styles.img_container}`}><img src="images/javascript.png" alt="" /></div>
        <div className={`${styles.img_container}`}><img src="images/react4.png" alt="" /></div>
        {/* <div className={`${styles.img_container}`}><img src="images/mongodb3.png" alt="" /></div> */}
        <div className={`${styles.img_container}`}><img src="images/tailwind2.png" alt="" /></div>
      </div>
    </div>
  )
}

export default Tech_stack