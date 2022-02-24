import React from "react";
import "./CenterCopyStyle.css";

function CenterCopyStyle(props) {
  const { spanText1, spanText2 } = props;

  return (
    <div className="center-copy-style">
      <img
        alt="img"
        className="system-divider"
        src="https://anima-uploads.s3.amazonaws.com/projects/62168b2382c644a9b4c291fd/releases/6216e2cfb8e024ef766187b8/img/system-divider@1x.svg"
      />
      <div className="we-strive-to-bridge">
        <span className="nbarchitekt-bold-cararra-30px">{spanText1}</span>
        <span className="span1-1">{spanText2}</span>
      </div>
      <img
        alt="img"
        className="system-divider-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/62168b2382c644a9b4c291fd/releases/6216e2cfb8e024ef766187b8/img/system-divider-1@1x.svg"
      />
    </div>
  );
}

export default CenterCopyStyle;
