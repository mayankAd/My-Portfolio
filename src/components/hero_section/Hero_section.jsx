import styles from "./Hero_section.module.css";
import React from "react";

const Hero_section = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.text}`}>
        <h1>Aspiring Web Developer, Learner</h1>
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
