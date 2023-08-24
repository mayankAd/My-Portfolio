import styles from './Button.module.css'

const Button = (props) => {
  return (
    <>
    <button style={{color:props.color, border:props.border_}} className={`${styles.container}`}>{props.text}</button>
    </>
  )
}

export default Button