import React from "react";
import Rectangle31 from "../Rectangle31";
import "./Footer.css";

function Footer(props) {
  const { evolveYourBrandAn, about, services, work, web3, place, x2022PrsnaStudioL, prsnaStudioLlc } = props;

  return (
    <div className="footer">
      <div className="flex-row-1">
        <div className="flex-col-2">
          <img
            alt="img"
            className="prsna_-logo_-full-color-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/62168b2382c644a9b4c291fd/releases/6216e2cfb8e024ef766187b8/img/prsna-logo-full-color-1@2x.svg"
          />
          <div className="evolve-your-brand-an-1">{evolveYourBrandAn}</div>
          <div className="group-68">
            <img
              alt="img"
              className="union-6"
              src="https://anima-uploads.s3.amazonaws.com/projects/62168b2382c644a9b4c291fd/releases/6216e2cfb8e024ef766187b8/img/union-11@2x.svg"
            />
            <img
              alt="img"
              className="union-5"
              src="https://anima-uploads.s3.amazonaws.com/projects/62168b2382c644a9b4c291fd/releases/6216e2cfb8e024ef766187b8/img/union-10@2x.svg"
            />
            <img
              alt="img"
              className="union-5"
              src="https://anima-uploads.s3.amazonaws.com/projects/62168b2382c644a9b4c291fd/releases/6216e2cfb8e024ef766187b8/img/union-9@2x.svg"
            />
          </div>
        </div>
        <div className="flex-col-3 nbarchitekt-regular-normal-silver-chalice-15px">
          <div className="about-1">{about}</div>
          <div className="services-1">{services}</div>
          <div className="work-1">{work}</div>
          <div className="web-3-1">{web3}</div>
          <div className="contact">{place}</div>
          <div className="flex-row-2">
            <img
              alt="img"
              className="icon-border"
              src="https://anima-uploads.s3.amazonaws.com/projects/62168b2382c644a9b4c291fd/releases/6216e2cfb8e024ef766187b8/img/icon-border@2x.svg"
            />
            <Rectangle31 />
            <Rectangle31 />
          </div>
        </div>
      </div>
      <div className="overlap-group-2 nbarchitekt-light-gravel-10px">
        <p className="x2022-prsna-studio-l">{x2022PrsnaStudioL}</p>
        <div className="prsna-studio-llc">{prsnaStudioLlc}</div>
        <img
          alt="img"
          className="divider-bar"
          src="https://anima-uploads.s3.amazonaws.com/projects/62168b2382c644a9b4c291fd/releases/6216e2cfb8e024ef766187b8/img/divider-bar@1x.svg"
        />
      </div>
    </div>
  );
}

export default Footer;
