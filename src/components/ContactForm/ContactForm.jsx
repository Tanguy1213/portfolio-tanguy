import React from "react";
import "./ContactForm.scss";

function ContactForm() {
  return (
    <div className="contact">
      <form name="contact" method="post" className="contactForm" data-netlify="true" onSubmit="submit">

        <input type="hidden" name="form-name" value="contact" />
        <label for="name">Nom: </label>
        <input type="text" name="name" />

        <label for="email">Email: </label>
        <input type="email" name="email" />

        <label for="message">Message: </label>
        <textarea name="message"></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default ContactForm;
