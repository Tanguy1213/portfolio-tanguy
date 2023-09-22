import React from "react";
import "./BtnDownload.scss"

function BtnDownload({ btnText, fileUrl}) {
    
  return (
        <a href={fileUrl} className="btn-link"><span>{btnText}</span></a> 
  );
}

export default BtnDownload;
