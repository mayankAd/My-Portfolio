import React from "react";

const Message_section = () => {
  return (
    <div className="mt-[100px] border p-10">
      <div className="flex flex-col gap-5">
        <h2 className="text-center font-bold text-3xl">Send me a message!</h2>
        <p className="text-center text-lg">
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>
      </div>
      <div className="flex flex-col gap-10 mt-10 items-center">
        <div className="flex gap-20">
          <div className="flex flex-col">
            <label htmlFor="">Your name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Email Address</label>
            <input type="text" placeholder="Enter your email address" />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Your Message</label>
          <input
            type="text"
            placeholder="Hi, I would like to get a website built. How soom can you hop on to discuss this?"
          />
        </div>
      </div>
      <div className="flex justify-center mt-20"><button className="text-blue-600 font-bold border border-blue-600 rounded-full  pt-2 pb-2 pl-10 pr-10">
        SEND
      </button></div>
      
    </div>
  );
};

export default Message_section;
