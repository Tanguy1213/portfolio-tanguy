import React, { useState } from "react";
import "./ContactForm.scss";

function ContactForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fonction pour ouvrir la modale
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Fonction pour fermer la modale
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Soumettez le formulaire ici (votre code de traitement).

    // Après avoir soumis le formulaire, ouvrez la modale de confirmation.
    openModal();
  };

  return (
    <div>
      <form
        name="contact"
        method="post"
        className="contactForm"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact"/>
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

      {/* Modale de confirmation */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Confirmation de soumission</h2>
            <p>Votre message a été soumis avec succès!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
