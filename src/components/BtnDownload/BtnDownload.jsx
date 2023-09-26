import React from "react";
import "./BtnDownload.scss"

function BtnDownload({ btnText, fileUrl}) {
    
  return (
        <a href={fileUrl} className="btn-link"><span dangerouslySetInnerHTML={{ __html: btnText }} /></a> 
  );
}

export default BtnDownload;
