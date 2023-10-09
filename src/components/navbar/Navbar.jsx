import { useContext, useState } from "react";
import Button from "../button/Button";
import styles from "./Navbar.module.css";
import { ThemeContext } from "../../App";
import Theme_btn from "../theme_btn/Theme_btn";

const Navbar = () => {
  const data = useContext(ThemeContext);
  const changeTheme = data.setTheme;

    const toggleTheme = () => {
        changeTheme((curr) => (curr==="light"? "dark":"light"));
      }

  return (
    <>
      <div
        className={`${styles.container} relative`}
        style={{
          backgroundColor: data.theme === "dark" ? "black" : "white",
          color: data.theme === "dark" ? "white" : "black",
        }}
      >
        <div className={`${styles.logo}`}>
          <a href="#about_me">
            <img src="images/mayanklogo.png" alt="" />
          </a>
        </div>

        <div
          
          className="flex sm:flex-col text-lg border  border-black bg-white rounded-sm flex-col justify-between lg:hidden md:hidden absolute right-10 " style={{
            backgroundColor: data.theme === "dark" ? "black" : "white",
            borderColor: data.theme === "dark" ? "white" : "black",
          }}
        >
          <a
            className="flex justify-center p-1 mb-1 mr-1 ml-1 mt-1 bg-slate-500  overflow-hidden hover:bg-blue-300 hover:text-white text-white"
            href="#projects_section "
          >
            Projects
          </a>

          <a
            className="p-1 mb-1 mr-1 ml-1 bg-slate-500 hover:bg-blue-300 hover:text-white text-white"
            href="#Message_section"
          >
            Say Hello
          </a>
          <button
            className="flex justify-center p-1 mb-1 mr-1 ml-1 bg-yellow-300 hover:bg-blue-300 hover:text-white text-black"
            href="" onClick={toggleTheme}
          >
            Theme
          </button>
        </div>
        
        <div className={`${styles.links} `}>
        
          <Theme_btn />
          <a href="#projects_section">
            <button className="text-lg hover:text-violet-500  hidden md:block lg:block ">
              Projects
            </button>
          </a>
          <a className="hidden md:block lg:block" href="#Message_section ">
            <Button text={"Say Hello"} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
