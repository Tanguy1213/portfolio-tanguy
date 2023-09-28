import React from 'react';
import "./CompBar.scss";
const CompetenceBar = ({ titre, icone, pourcentage, couleur }) => {
  
    const fillStyle = {
      width: `${pourcentage}%`,
      backgroundColor: couleur
    };
  
    return (
      <div className="competence-bar">
        <div className="competence-title">{titre}</div>
        <div className="competence-container">
          <div className="competence-icon">{icone}</div>
          <div className="competence-progress">
            <div className="competence-fill" style={fillStyle}></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CompetenceBar;