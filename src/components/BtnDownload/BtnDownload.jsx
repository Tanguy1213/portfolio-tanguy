import React from "react";
import "./BtnDownload.scss";

function BtnDownload({ btnText, fileUrl, fileName }) {
  const handleDownload = () => {
    // Créez un élément d'ancre pour déclencher le téléchargement du fichier
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = fileName;
    anchor.style.display = "none";

    // Ajoutez l'élément d'ancre au DOM et déclenchez le téléchargement
    document.body.appendChild(anchor);
    anchor.click();

    // Retirez l'élément d'ancre du DOM après le téléchargement
    document.body.removeChild(anchor);
  };

  return (
    <div className="button-container">
      <button onClick={handleDownload}>{btnText}</button>
    </div>
  );
}

export default BtnDownload;