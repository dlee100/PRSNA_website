import React from "react";
import Rectangle46 from "../Rectangle46";
import ButtonSystemStyle from "../ButtonSystemStyle";
import "./IconDisplayCenter.css";

function IconDisplayCenter(props) {
  const { passedProjects, buttonSystemStyleProps } = props;

  return (
    <div className="icon-display-center">
      <div className="passed-projects nbarchitekt-bold-cararra-30px">{passedProjects}</div>
      <div className="flex-row">
        <img
          alt="img"
          className="large-icon-border"
          src="https://anima-uploads.s3.amazonaws.com/projects/62168b2382c644a9b4c291fd/releases/6216e2cfb8e024ef766187b8/img/large-icon-border@2x.svg"
        />
        <Rectangle46 />
        <Rectangle46 />
        <Rectangle46 />
        <Rectangle46 />
        <Rectangle46 />
      </div>
      <ButtonSystemStyle learnMore={buttonSystemStyleProps.learnMore} className={buttonSystemStyleProps.className} />
    </div>
  );
}

export default IconDisplayCenter;
