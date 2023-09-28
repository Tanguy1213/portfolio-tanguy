import React, { useState } from "react";
import Modal from "react-modal";
import { NavLink } from "react-router-dom";
import "./ContactForm.scss";

function ContactForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
        // Réinitialisez les valeurs des champs après la soumission réussie
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Erreur lors de la soumission du formulaire :", error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Mettez à jour l'état local formData lorsque les champs changent
    setFormData({
      ...formData,
      [name]: value,
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
        <input
          type="text"
          name="name"
          required={true}
          value={formData.name} // Utilisez la valeur de l'état local
          onChange={handleChange} // Utilisez la fonction de gestion du changement
        />
        <label>Email :</label>
        <input
          type="email"
          name="email"
          required={true}
          value={formData.email} // Utilisez la valeur de l'état local
          onChange={handleChange} // Utilisez la fonction de gestion du changement
        />
        <label>Message :</label>
        <textarea
          name="message"
          required={true}
          placeholder="Entrez votre message ici!"
          value={formData.message} // Utilisez la valeur de l'état local
          onChange={handleChange} // Utilisez la fonction de gestion du changement
        ></textarea>
        <button type="submit">Envoyer</button>
      </form>
      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Message envoyé"
        className="custom-modal"
        overlayClassName="custom-overlay"
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