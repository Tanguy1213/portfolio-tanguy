import React from "react";
import "./ContactForm.scss";

function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire

    // Récupérez les données du formulaire
    const formData = new FormData(event.target);

    // Utilisez fetch pour soumettre les données à Netlify
    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        // Redirigez vers la page de confirmation ou effectuez votre transition personnalisée ici
        window.location.href = "/"; // Remplacez par le chemin de votre page de confirmation
      })
      .catch((error) => {
        console.error("Erreur lors de la soumission du formulaire :", error);
      });
  };

  return (
    <form
      name="contact"
      method="post"
      className="contactForm"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />

      <label>Nom :</label>
      <input type="text" name="name" required={true} />

      <label>Email :</label>
      <input type="email" name="email" required={true} />

      <label>Message :</label>
      <textarea
        name="message"
        required={true}
        placeholder="Entrez votre message ici !"
      ></textarea>

      <button type="submit">Envoyer</button>
    </form>
  );
}

export default ContactForm;
