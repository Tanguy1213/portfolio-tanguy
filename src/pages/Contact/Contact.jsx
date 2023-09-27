import "./Contact.scss";
import React, { useState } from "react";
import Particles from "../../components/Particles";
import ContactForm from "../../components/ContactForm/ContactForm";
import { NavLink } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

function Contact() {
  const [showModal, setShowModal] = useState(false);

  // Fonction pour afficher la modale
  const openModal = () => {
    setShowModal(true);
  };

  // Fonction pour fermer la modale
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="layout-contact">
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Thank You!</h2>
            <p>Your message has been submitted successfully.</p>
          </div>
        </div>
      )}
      <Loader />
      <div className="goBack-link">
        <NavLink to="/">
          <i className="fa-solid fa-left-long fa-2xl"></i>
        </NavLink>
      </div>
      <main className="contact-content">
        <h1 className="form-title">Formulaire de contact</h1>
        <section className="contact-section">
          <ContactForm onSuccess={openModal} />
        </section>
      </main>
      <Particles />
    </div>
  );
}

export default Contact;
