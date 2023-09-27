import React from "react";
import "./ContactForm.scss";

function ContactForm() {
  return (
      <form name="contact" method="post" className="contactForm" action="/ContactSucces">
      <input type="hidden" name="form-name" value="contact" />
      
            <label>Nom :</label> 
            <input type="text" name="name" required={true}/>
          
            <label>Email :</label> 
            <input type="email" name="email" required={true}/>
          
            <label>Message :</label> 
            <textarea name="message" required={true} placeholder="Entrez votre message ici !" ></textarea>
          
            <button type="submit">Envoyer</button>
          
        </form>
  );
}

export default ContactForm;
