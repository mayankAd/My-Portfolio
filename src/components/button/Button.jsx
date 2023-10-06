import { useContext } from 'react'
import styles from './Button.module.css'
import { ThemeContext } from '../../App'

const Button = (props) => {

  const data = useContext(ThemeContext);

  const isDark = (data.theme==="dark")

  return (
    <>
    <button style={{backgroundColor:data.theme==="dark"?"purple":"white", borderColor:data.theme==="dark"?"white":"blue", color:data.theme==="dark"?"white":"blue"}} className={`${styles.container}`}>{props.text}</button>
    </>
  )
}

export default Button