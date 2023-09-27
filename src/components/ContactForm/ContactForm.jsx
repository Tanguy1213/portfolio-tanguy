import React from "react";
import "./ContactForm.scss";

function ContactForm() {
  return (
    <div className="contact">
      <form name="contact" method="post" className="contactForm">
      <input type="hidden" name="form-name" value="contact" />
            <label>Your Name:</label> 
            <input type="text" name="name"/>
          
            <label>Your Email:</label> 
            <input type="email" name="email"/>
          
            <label>Message: </label>
            <textarea name="message"></textarea>
          
            <button type="submit">Send</button>
          
        </form>
    </div>
  );
}

export default ContactForm;
