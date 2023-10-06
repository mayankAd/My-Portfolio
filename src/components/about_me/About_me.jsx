import { useContext } from "react";
import styles from "./About_me.module.css";
import { ThemeContext } from "../../App";

const About_me = () => {

  const data = useContext(ThemeContext);

  return (
    <div id="about_me" className={`${styles.main}`} style={{backgroundColor:data.theme==="dark"?"rgb(65, 0, 123)":"rgb(108, 78, 231)", color:data.theme==="dark"?"white":"black"}}>
        <div className={`${styles.container}`}>
      <h2>Hi, I'm Mayank. Nice to meet you.</h2>

      <p>
        I am a coding enthusiast with a passion of developing web applications. I like building stuff and solving problems. I'm quietly confident, naturally curious, and
        perpetually working on improving my skills.
        I've build some projects which you can checkout in my projects section.
      </p>
    </div>
    </div>
    
  );
};

export default About_me;
