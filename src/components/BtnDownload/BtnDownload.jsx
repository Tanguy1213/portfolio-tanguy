import React from "react";
import "./BtnDownload.scss";
import PropTypes from 'prop-types';

function BtnDownload({ btnText, fileUrl }) {
  

  return (
    <a className=" gradient-border" href={fileUrl} target="_blank" rel="noreferrer">
      <span>
        <i className="fas fa-file-arrow-down"></i>
        {btnText}
      </span>
    </a>
  );
}

BtnDownload.propTypes = {
  btnText: PropTypes.string.isRequired,
  fileUrl: PropTypes.string.isRequired
}


export default BtnDownload;
