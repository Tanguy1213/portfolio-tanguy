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

const technologiesIcons = {
  React: "fa-brands fa-react",
  HTML: "fa-brands fa-html5",
  SASS: "fa-brands fa-sass",
  CSS: "fa-brands fa-css3-alt",
  Javascript: "fa-brands fa-square-js",
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
              <div className="tech-wrapper">
                <h4>Technologies :</h4>
                <div>
                {cardData.technologies.map((technologie, index) => (
                  <span key={index}>
                    {technologiesIcons[technologie] ? (
                      <>
                        <i className={technologiesIcons[technologie]} />
                      </>
                    ) : (
                      technologie
                    )}
                    {index < cardData.technologies.length - 1 && (
                      <span className="split-style"> | </span>
                    )}
                  </span>
                ))}
                </div>
              </div>
            </div>
          </div>
          <div className="link-wrapper">
            <a
              href={cardData.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`buttonStyle ${
                !cardData.githubLink ? "disabled" : ""
              }`}
              disabled={!cardData.githubLink}
            >
              {cardData.githubLink
                ? "Voir sur GitHub"
                : "Pas de lien GitHub disponible"}
            </a>
            <a
              href={cardData.siteLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`buttonStyle ${!cardData.siteLink ? "disabled" : ""}`}
              disabled={!cardData.siteLink}
            >
              {cardData.siteLink
                ? "Voir le site"
                : "Pas de lien vers le site disponible"}
            </a>
          </div>
          <button onClick={closeModal}>X</button>
        </div>
      )}
    </Modal>
  );
}

export default CustomModal;
