import styles from "./Section_two.module.css";
import About_me from "../about_me/About_me";
import Tech_stack from "../tech_stack/Tech_stack";

const Section_two = () => {
  return (
    <div className={`${styles.container}`}>
      <About_me />
      <Tech_stack />
    </div>
  );
};

export default Section_two;
