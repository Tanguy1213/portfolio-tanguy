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
  const [isFormValid, setIsFormValid] = useState(false); // État pour gérer la validité du formulaire

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
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setIsFormValid(false); // Réinitialisez la validité du formulaire
      })
      .catch((error) => {
        console.error("Erreur lors de la soumission du formulaire :", error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };

    // Vérifiez la validité du formulaire en vérifiant si tous les champs sont remplis
    const isFormValid =
      updatedFormData.name !== "" &&
      updatedFormData.email !== "" &&
      updatedFormData.message !== "";

    // Mettez à jour l'état local du formulaire et sa validité
    setFormData(updatedFormData);
    setIsFormValid(isFormValid);
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
        <input
          type="text"
          name="name"
          required={true}
          className="input-style"
          placeholder="Nom"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          required={true}
          className="input-style"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          required={true}
          className="input-style"
          placeholder="Entrez votre message ici !"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button
          type="submit"
          className={isFormValid ? "valid-button" : "invalid-button"}
          disabled={!isFormValid}
        >
          Envoyer
        </button>
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
        <NavLink to="/" className="modal-link">
          Retour à la page d'accueil
        </NavLink>
        <button
          className="closemodal-btn"
          onClick={() => setIsModalOpen(false)}
        >
          <i className="fa-solid fa-xmark fa-xl"></i>
        </button>
      </Modal>
    </div>
  );
}

export default ContactForm;
