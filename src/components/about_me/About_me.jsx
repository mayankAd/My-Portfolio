import styles from "./About_me.module.css";

const About_me = () => {
  return (
    <div id="about_me" className={`${styles.main}`}>
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
