import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./CustomModal.scss";

// Définissez le style de la modale
const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    border: "none",
    background: "transparent",
    inset: "auto",
  },
};

function CustomModal({ isOpen, closeModal, cardData }) {
  const [modalClass, setModalClass] = useState("modal");

  useEffect(() => {
    if (isOpen) {
      setModalClass("modal modal-open");
    } else {
      setModalClass("modal");
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      style={modalStyle}
      className={modalClass}
    >
      {cardData && (
        <div className="modal-content">
          <div className="content-wrapper">
            <img src={cardData.src} alt={cardData.alt} />
            <div className="text-wrapper">
              <h3>Projet : {cardData.title}</h3>
              <p>{cardData.description}</p>
              <p>
                Compétences : <br />
                <strong>{cardData.compétences.join(", ")}</strong>
              </p>
            </div>
          </div>
          <div className="link-wrapper">
          {cardData.githubLink && ( // Vérifiez si githubLink existe
        <a
          href={cardData.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="buttonStyle"
        >
          Voir sur GitHub
        </a>
      )}
      {cardData.siteLink && ( // Vérifiez si siteLink existe
        <a
          href={cardData.siteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="buttonStyle"
        >
          Voir le site
        </a>
      )}
          </div>
          <button onClick={closeModal}>X</button>
        </div>
      )}
    </Modal>
  );
}

export default CustomModal;
