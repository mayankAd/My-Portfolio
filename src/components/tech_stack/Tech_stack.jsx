import styles from './Tech_stack.module.css'

const Tech_stack = () => {
  return (
    <div className={`${styles.container}`}>
      <h2>Tech Stack</h2>
      <div className={`${styles.techs}`}>
        <div className={`${styles.img_container}`}><img src="images/html.png" alt="" /></div>
        <div className={`${styles.img_container}`}><img src="images/CSS.png" alt="" /></div>
        <div className={`${styles.img_container}`}><img src="images/javascript.png" alt="" /></div>
        <div className={`${styles.img_container}`}><img src="images/react4.png" alt="" /></div>
        <div className={`${styles.img_container}`}><img src="images/mongodb3.png" alt="" /></div>
        <div className={`${styles.img_container}`}><img src="images/tailwind2.png" alt="" /></div>
      </div>
    </div>
  )
}

export default Tech_stack