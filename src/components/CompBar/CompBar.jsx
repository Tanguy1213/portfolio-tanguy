import React, { useState, useEffect, useRef } from "react";
import { lighten, rgb } from 'polished';
import PropTypes from "prop-types";
import "./CompBar.scss";

const CompBar = ({ titre, pourcentage, icone }) => {
  //Gestion du remplissage des barres et du pourcentage
  const [remplir, setRemplir] = useState(false);
  const [pourcentageActuel, setPourcentageActuel] = useState(0);

  const fillStyle = {
    //Style pour le remplissage pour que la couleur corresponde a une prop tout come le % de remplissage
    width: `${pourcentageActuel}%`,
    backgroundColor: `rgb(88, 129, 87)`,
    borderRight: `4px solid ${lighten(0.5, rgb(88, 129, 87))}`
  };
  const iconStyle = {
    //Style de l'icone pour matcher avec la couleur de la barre
    color:"rgb(241, 235, 235)",
  };

  useEffect(() => {
    if (remplir) {
      let intervalId = setInterval(() => {
        if (pourcentageActuel < pourcentage) {
          setPourcentageActuel((prevPourcentage) =>
            Math.min(prevPourcentage + 1, pourcentage)
          );
        } else {
          clearInterval(intervalId);
        }
      }, 20);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [remplir, pourcentage, pourcentageActuel]);

  //Gestion de la visibilité avec l'intercat Observer qui active le remplissage de la barre en fonction du scroll de l'utilisateur
  const barRef = useRef(null);
  useEffect(() => {
    const options = {
      root: null, // Fenêtre comme racine de l'observation
      rootMargin: "0px", // Marge autour de la fenêtre
      threshold: 1, // Portion visible requise pour déclencher l'observation
    };
    const callback = (entries) => {
      if (entries[0].isIntersecting) {
        // L'élément est devenu visible
        setRemplir(true);
      }
    };
    const observer = new IntersectionObserver(callback, options); //Si le barRef (mise sur competence-bar) est visibile
    if (barRef.current) {
      observer.observe(barRef.current);
    }
    return () => {
      observer.disconnect(); // Arrêtez l'observation lorsque le composant est démonté
    };
  }, []);

  //délais pour l'affichage des barres de compétences pour éviter un micro affichage
  useEffect(() => {
    const competencesContainer = document.querySelector(".competence-section");

    // setTimeout pour ajouter la classe "visible" après 2000 millisecondes
    setTimeout(() => {
      if (competencesContainer) {
        competencesContainer.classList.add("visible");
      }
    }, 200);
  }, []);

  return (
    <div className="competence-bar" ref={barRef}>
      <div className="competence-name">{titre}</div>
      <div className="competence-wrapper">
        <div className="competence-icon" style={iconStyle}>
          {icone}
        </div>
        <div className="competence-container">
          <div className="competence-progress">
            <div
              className={`progress-bar ${remplir ? "filled" : ""}`}
              style={fillStyle}
            >
              <span>{remplir ? `${pourcentageActuel}%` : ""}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CompBar.propTypes = {
  titre: PropTypes.string.isRequired,
  pourcentage: PropTypes.number.isRequired,
  icone: PropTypes.any.isRequired
};

export default CompBar;
