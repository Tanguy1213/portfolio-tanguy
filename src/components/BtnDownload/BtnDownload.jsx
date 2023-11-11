import React from "react";
import "./BtnDownload.scss";
import PropTypes from 'prop-types';

function BtnDownload({ btnText, fileUrl }) {
  BtnDownload.propTypes = {
    btnText: PropTypes.string.isRequired,
    fileUrl: PropTypes.string.isRequired
  }

  return (
    <a className=" gradient-border" href={fileUrl} target="_blank">
      <span>
        <i className="fas fa-file-arrow-down"></i>
        {btnText}
      </span>
    </a>
  );
}


export default BtnDownload;
