import React from "react";
import "./BtnDownload.scss";

function BtnDownload({ btnText, fileUrl }) {
  return (
    <a className=" gradient-border" href={fileUrl}>
      <span>
        <i className="fas fa-file-arrow-down"></i>
        {btnText}
      </span>
    </a>
  );
}

export default BtnDownload;
