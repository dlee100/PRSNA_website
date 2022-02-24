import React from "react";
import Ruler2 from "../Ruler2";
import CenterCopyStyle from "../CenterCopyStyle";
import LargeImageCenter from "../LargeImageCenter";
import IconDisplayCenter from "../IconDisplayCenter";
import CallToActionCenter from "../CallToActionCenter";
import Footer from "../Footer";
import "./styleguide.css"
import "./MainLandingPageDesktop.css";

function MainLandingPageDesktop(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    intoWeb3,
    evolve,
    about,
    services,
    work,
    web3,
    largeImageCenterProps,
    largeImageCenterProps2,
    iconDisplayCenterProps,
    callToActionCenterProps,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="main-landing-page-desktop screen">
        <div className="overlap-group4">
          <img
            alt="img"
            className="background-grid"
            src="https://anima-uploads.s3.amazonaws.com/projects/62168b2382c644a9b4c291fd/releases/6216e4516c8fc6b10d6e0572/img/background-grid@1x.svg"
          />
          <img
            alt="img"
            className="prsna_-logo_-full-color"
            src="https://anima-uploads.s3.amazonaws.com/projects/62168b2382c644a9b4c291fd/releases/6216e2cfb8e024ef766187b8/img/prsna-logo-full-color@2x.svg"
          />
          <img
            alt="img"
            className="ruler"
            src="https://anima-uploads.s3.amazonaws.com/projects/62168b2382c644a9b4c291fd/releases/6216e2cfb8e024ef766187b8/img/ruler@2x.svg"
          />
          <Ruler2 />
          <h1 className="evolve-your-brand-an">
            <span className="nbarchitekt-bold-cararra-40px">{spanText1}</span>
            <span className="span1">{spanText2}</span>
            <span className="nbarchitekt-bold-cararra-40px">{spanText3}</span>
          </h1>
          <div className="into-web-3 nbarchitekt-bold-cararra-40px">{intoWeb3}</div>
          <div className="evolve nbarchitekt-bold-cararra-40px">{evolve}</div>
          <img
            alt="img"
            className="text-matrix"
            src="https://anima-uploads.s3.amazonaws.com/projects/62168b2382c644a9b4c291fd/releases/621693b4c443e7799c5821fc/img/text-matrix@2x.svg"
          />
          <CenterCopyStyle spanText1={largeImageCenterProps.spanText1} spanText2={largeImageCenterProps.spanText2} />
          <LargeImageCenter
            theTeam={largeImageCenterProps2.theTeam}
            buttonSystemStyleProps={largeImageCenterProps2.buttonSystemStyleProps}
          />
          <img
            alt="img"
            className="homepage-view-hub-asset"
            src="https://anima-uploads.s3.amazonaws.com/projects/62168b2382c644a9b4c291fd/releases/6216e4516c8fc6b10d6e0572/img/homepage-view-hub-asset@1x.svg"
          />
          <div className="about nbarchitekt-regular-normal-silver-chalice-15px">{about}</div>
          <div className="services nbarchitekt-regular-normal-silver-chalice-15px">{services}</div>
          <div className="work nbarchitekt-regular-normal-silver-chalice-15px">{work}</div>
          <div className="web-3 nbarchitekt-regular-normal-silver-chalice-15px">{web3}</div>
        </div>
        <IconDisplayCenter
          passedProjects={iconDisplayCenterProps.passedProjects}
          buttonSystemStyleProps={iconDisplayCenterProps.buttonSystemStyleProps}
        />
        <CallToActionCenter
          readyToEvolveYour={callToActionCenterProps.readyToEvolveYour}
          buttonSystemStyleProps={callToActionCenterProps.buttonSystemStyleProps}
        />
        <Footer {...footerProps} />
      </div>
    </div>
  );
}

export default MainLandingPageDesktop;
