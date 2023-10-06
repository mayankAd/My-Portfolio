import React, { useContext } from "react";
import { ContactUs } from "../contact_me/ContactUs";
import { ThemeContext } from "../../App";

const Message_section = () => {

  const data = useContext(ThemeContext);

  return (
    <div className="flex justify-center" style={{backgroundColor:data.theme==="dark"?"black":"white"}}>
    <div id="Message_section" className="mt-[100px] border p-10 w-[70vw] rounded-xl" style={{color:data.theme==="dark"?"white":"black", backgroundColor:data.theme==="dark"?"black":"white"}}>
      <div className="flex flex-col gap-5">
        <h2 className="text-center font-bold text-4xl">Send me a message!</h2>
        <p className="text-center text-xl">
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>
      </div>
      <ContactUs/>
      
    </div>
    </div>
  );
};

export default Message_section;
