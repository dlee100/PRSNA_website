import React from "react";
import ButtonSystemStyle from "../ButtonSystemStyle";
import "./CallToActionCenter.css";

function CallToActionCenter(props) {
  const { readyToEvolveYour, buttonSystemStyleProps } = props;

  return (
    <div className="call-to-action-center">
      <div className="overlap-group3">
        <div className="flex-col-1">
          <div className="ready-to-evolve-your">{readyToEvolveYour}</div>
          <div className="vector-container">
            <img
              alt="img"
              className="vector-106"
              src="https://anima-uploads.s3.amazonaws.com/projects/62168b2382c644a9b4c291fd/releases/6216e2cfb8e024ef766187b8/img/vector-106@2x.svg"
            />
            <img
              alt="img"
              className="vector-107"
              src="https://anima-uploads.s3.amazonaws.com/projects/62168b2382c644a9b4c291fd/releases/6216e2cfb8e024ef766187b8/img/vector-107@2x.svg"
            />
            <img
              alt="img"
              className="vector-109"
              src="https://anima-uploads.s3.amazonaws.com/projects/62168b2382c644a9b4c291fd/releases/6216e2cfb8e024ef766187b8/img/vector-109@2x.svg"
            />
            <img
              alt="img"
              className="vector-108"
              src="https://anima-uploads.s3.amazonaws.com/projects/62168b2382c644a9b4c291fd/releases/6216e2cfb8e024ef766187b8/img/vector-108@2x.svg"
            />
            <img
              alt="img"
              className="vector-110"
              src="https://anima-uploads.s3.amazonaws.com/projects/62168b2382c644a9b4c291fd/releases/6216e2cfb8e024ef766187b8/img/vector-110@2x.svg"
            />
          </div>
        </div>
        <div className="group-67">
          <img
            alt="img"
            className="union-3"
            src="https://anima-uploads.s3.amazonaws.com/projects/62168b2382c644a9b4c291fd/releases/6216e2cfb8e024ef766187b8/img/union-8@2x.svg"
          />
          <img
            alt="img"
            className="union-4"
            src="https://anima-uploads.s3.amazonaws.com/projects/62168b2382c644a9b4c291fd/releases/6216e2cfb8e024ef766187b8/img/union-7@2x.svg"
          />
          <img
            alt="img"
            className="union-3"
            src="https://anima-uploads.s3.amazonaws.com/projects/62168b2382c644a9b4c291fd/releases/6216e2cfb8e024ef766187b8/img/union-6@2x.svg"
          />
        </div>
        <ButtonSystemStyle learnMore={buttonSystemStyleProps.learnMore} className={buttonSystemStyleProps.className} />
      </div>
    </div>
  );
}

export default CallToActionCenter;
