import React from "react";
import BracketSystemStyle1 from "../BracketSystemStyle1";
import ButtonSystemStyle from "../ButtonSystemStyle";
import BracketSystemStyle12 from "../BracketSystemStyle12";
import "./LargeImageCenter.css";

function LargeImageCenter(props) {
  const { theTeam, buttonSystemStyleProps } = props;

  return (
    <div className="large-image-center">
      <BracketSystemStyle1 />
      <div className="flex-col">
        <div className="the-team nbarchitekt-bold-cararra-30px">{theTeam}</div>
        <img
          alt="img"
          className="vector-118"
          src="https://anima-uploads.s3.amazonaws.com/projects/62168b2382c644a9b4c291fd/releases/6216e2cfb8e024ef766187b8/img/vector-118@1x.svg"
        />
        <ButtonSystemStyle learnMore={buttonSystemStyleProps.learnMore} />
      </div>
      <BracketSystemStyle12 />
    </div>
  );
}

export default LargeImageCenter;
