import styles from "./About_me.module.css";

const About_me = () => {
  return (
    <div id="about_me" className={`${styles.main}`}>
        <div className={`${styles.container}`}>
      <h2>Hi, I'm Mayank. Nice to meet you.</h2>

      <p>
        Since beginning my journey as a freelance designer over 11 years ago,
        I've done remote work for agencies, consulted for startups, and
        collaborated with talented people to create digital products for both
        business and consumer use. I'm quietly confident, naturally curious, and
        perpetually working on improving my chops one design problem at a time.
      </p>
    </div>
    </div>
    
  );
};

export default About_me;
