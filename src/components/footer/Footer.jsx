import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";

import Icon from "../icons/Icon";
import { useContext } from "react";
import { ThemeContext } from "../../App";



const Footer = () => {

  const data = useContext(ThemeContext);

  return (
    <div  style={{backgroundColor:data.theme==="dark"?"black":"white", color:data.theme==="dark"?"white":"black"}}>
    <div className="h-[600px] bg-violet-600 mt-10 rounded-xl ml-10 mr-10 pt-20 shadow-lg flex items-center flex-col gap-14"  style={{backgroundColor:data.theme==="dark"?"rgb(39, 0, 107)":"rgb(124,58,237)"}}>
      <div className="h-[60px] w-[60px]">
        <img src="images/logo2.png" alt="" />
      </div>
      <p className="text-white w-[350px] text-center text-2xl font-semibold">
        Living, learning, & leveling up one day at a time.
      </p>
      <div className="flex gap-5 ">
        <Icon icon={AiFillGithub} link="https://github.com/mayankAd"/>
        <Icon icon={AiFillLinkedin} link="https://www.linkedin.com/in/mayankadhikari/"/>
        <Icon icon={AiFillMail} link="mailto:mayankadhikari2001@gmail.com"/>
        <Icon icon={AiFillTwitterCircle} link="https://twitter.com/mayankadhikar_i"/>
        <Icon icon={AiFillFacebook} />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <p className="text-white text-l">Handcrafted by me ``2023``</p>
        <p className="text-white text-xs flex items-center">
          made with <BiLogoReact className="text-4xl ml-4 hover:text-black" /> +{" "}
          <BiLogoTailwindCss className="text-4xl hover:text-black" />
        </p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
