import React from "react";
import "./ContactForm.scss";

function ContactForm() {
  return (
    <div className="contact">
      <form name="contact" method="post" className="contactForm">
      <input type="hidden" name="form-name" value="contact" />
            <label>Your Name:</label> 
            <input type="text" name="name" required="true"/>
          
            <label>Your Email:</label> 
            <input type="email" name="email" required="true"/>
          
            <label>Message: </label>
            <textarea name="message" required="true"></textarea>
          
            <button type="submit">Send</button>
          
        </form>
    </div>
  );
}

export default ContactForm;
