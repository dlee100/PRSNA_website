import React from "react";
import "./CenterCopyStyle.css";

// Assets
import divider1 from "../../../assets/img/system-divider@1x.svg";
import divider2 from "../../../assets/img/system-divider@2x.svg";


function CenterCopyStyle(props) {

  return (
    <div className="center-copy-style">
      <img
        alt="img"
        className="system-divider"
        src={divider1}
      />
      <div className="we-strive-to-bridge">
        <span className="nbarchitekt-bold-cararra-30px"><>we strive to<br /></></span>
        <span className="span1-1">bridge the gap between your customers’ wants and your business’s needs to accelerate the evolution of your digital product and future identity.</span>
      </div>
      <img
        alt="img"
        className="system-divider-1"
        src={divider2}
      />
    </div>
  );
}

export default CenterCopyStyle;
