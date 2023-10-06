import styles from "./Section_two.module.css";
import About_me from "../about_me/About_me";
import Tech_stack from "../tech_stack/Tech_stack";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Section_two = () => {

  const data = useContext(ThemeContext);

  return (
    <div className={`${styles.container}`} style={{backgroundColor:data.theme==="dark"?"black":"white"}}>
      <About_me />
      <Tech_stack />
    </div>
  );
};

export default Section_two;
