import React from "react";
import { ContactUs } from "../contact_me/ContactUs";

const Message_section = () => {
  return (
    <div className="flex justify-center">
    <div id="Message_section" className="mt-[100px] border p-10 w-[70vw] rounded-xl">
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
