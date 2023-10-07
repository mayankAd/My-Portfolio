import React, { useContext } from 'react'
import styles from './Theme_btn.module.css'
import { ThemeContext } from '../../App'

function Theme_btn() {

    const data = useContext(ThemeContext)

    const changeTheme = data.setTheme;

    const toggleTheme = () => {
        changeTheme((curr) => (curr==="light"? "dark":"light"));
      }


  return (
    <button className={`${styles.btn} ` } onClick={toggleTheme} style={{color:data.theme==="dark"?"white":"black", backgroundColor:data.theme==="dark"?"grey":"yellow",}}>
        {data.theme}mode
    </button>
  )
}

export default Theme_btn

