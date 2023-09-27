import React from "react";
import "./ContactForm.scss";

function ContactForm() {
  return (
    <div className="contact">
      <form name="contact" method="post" className="contactForm">
      <input type="hidden" name="form-name" value="contact" />
            <label>Your Name: <input type="text" name="name"/></label>
          
            <label>Your Email: <input type="email" name="email"/></label>
          
            <label>Message: <textarea name="message"></textarea></label>
          
            <button type="submit">Send</button>
          
        </form>
    </div>
  );
}

export default ContactForm;
