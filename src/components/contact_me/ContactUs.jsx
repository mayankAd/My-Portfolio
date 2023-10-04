import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactUs.module.css";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mzadg5p",
        "template_bi0rup8",
        form.current,
        "1LhdTdYx2DAFGZhEu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className={`${styles.container}`}>
        <div className={`${styles.div1}`}>
          <div>
            <label>Name</label>
            <input type="text" name="from_name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="from_email" />
          </div>
        </div>
        <div className={`${styles.message_div}`}>
          <label>Message</label>
          <textarea name="message" />
        </div>
        <input className={`${styles.submit}`} type="submit" value="Send" />
      </form>
    </div>
  );
};
