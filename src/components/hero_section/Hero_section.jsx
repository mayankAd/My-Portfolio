import { ThemeContext } from "../../App";
import styles from "./Hero_section.module.css";
import React, { useContext } from "react";

const Hero_section = () => {

  const data = useContext(ThemeContext);


  return (
    <div className={`${styles.container}`} style={{backgroundColor:data.theme==="dark"?"black":"white", color:data.theme==="dark"?"white":"black"}}>
      <div  className={`${styles.text} ${data.theme}`}>
        <h1>Aspiring Web Developer,Learner</h1>
        <p>I code, I build websites, and I love what I do.</p>
      </div>
      <div className={`${styles.avatar}`}>
        <img src="images/mf-avatar.svg" alt="" />
      </div>
      <div className={`${styles.devices}`}>
        <img src="images/hero-devices.svg" alt="" />
      </div>
    </div>
  );
};

export default Hero_section;
