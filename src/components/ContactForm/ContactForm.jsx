import React from "react";
import "./ContactForm.scss";

function ContactForm() {
  return (
    <div className="contact">
      <form name="contact" method="post" className="contactForm">
      <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
    </div>
  );
}

export default ContactForm;
