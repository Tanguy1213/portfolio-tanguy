import React, { useState } from "react";
import Modal from "react-modal";
import { NavLink } from "react-router-dom"; // Importez NavLink si vous ne l'avez pas déjà fait
import "./ContactForm.scss";

function ContactForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        openModal();
      })
      .catch((error) => {
        console.error("Erreur lors de la soumission du formulaire :", error);
      });
  };

  return (
    <div>
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

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Message envoyé"
        className="custom-modal" // Appliquez une classe CSS personnalisée pour la modal
        overlayClassName="custom-overlay" // Classe CSS pour le fond de la modal
      >
        <h2>Message envoyé avec succès!</h2>
        <p>Merci pour votre message.</p>
        <NavLink to="/">Retour à la page d'accueil</NavLink>
        <button onClick={() => setIsModalOpen(false)}>Fermer</button>
      </Modal>
    </div>
  );
}

export default ContactForm;
