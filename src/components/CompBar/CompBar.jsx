import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./CompBar.scss";

const CompetenceBar = ({ titre, icone, pourcentage, couleur }) => {
  const [remplir, setRemplir] = useState(false);
  const [pourcentageActuel, setPourcentageActuel] = useState(0);

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
      }, 20); // Vitesse d'animation (10 ms)

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [remplir, pourcentage, pourcentageActuel]);

  const fillStyle = {
    width: `${pourcentageActuel}%`,
    backgroundColor: couleur,
  };

  const iconStyle = {
    color: couleur,
  };

  const handleClickIcone = () => {
    if (!remplir) {
      setPourcentageActuel(0); // Réinitialisez le pourcentage actuel à 0
      setRemplir(true);
    }
  };

  return (
    <div className="competence-bar">
      <div className="competence-title">{titre}</div>
      <div className="competence-wrapper">
        <div
          className="competence-icon"
          style={iconStyle}
          onClick={handleClickIcone}
        >
          {icone}
        </div>
        <div className="competence-container">
          <div className="competence-progress">
            <div
              className={`progress-bar ${remplir ? "filled" : ""}`}
              style={fillStyle}
            >
              <span>
                {remplir ? `${pourcentageActuel}%` : ""}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CompetenceBar.propTypes = {
  titre: PropTypes.string.isRequired,
  pourcentage: PropTypes.number.isRequired,
  couleur: PropTypes.string.isRequired,
};

export default CompetenceBar;