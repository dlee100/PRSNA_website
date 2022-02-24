import React from "react";
import "./ButtonSystemStyle.css";

function ButtonSystemStyle(props) {
  const { learnMore, className } = props;

  return (
    <div className={`button-system-style ${className || ""}`}>
      <div className="overlap-group">
        <div className="learn-more nbarchitekt-bold-hunter-green-15px">{learnMore}</div>
      </div>
    </div>
  );
}

export default ButtonSystemStyle;
