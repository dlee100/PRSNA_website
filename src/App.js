import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLandingPageDesktop from "./components/Home/MainLandingPageDesktop";

function App() {
  return (
      <Routes>
        <Route path="/" element={<MainLandingPageDesktop {...mainLandingPageDesktopData} />} />
      </Routes>
  );
}

export default App;
const centerCopyStyleData = {
    spanText1: <>we strive to<br /></>,
    spanText2: "bridge the gap between your customers’ wants and your business’s needs to accelerate the evolution of your digital product and future identity.",
};

const buttonSystemStyle1Data = {
    learnMore: "learn more",
};

const largeImageCenterData = {
    theTeam: "The Team",
    buttonSystemStyleProps: buttonSystemStyle1Data,
};

const buttonSystemStyle2Data = {
    learnMore: "check out",
    className: "button-style-2",
};

const iconDisplayCenterData = {
    passedProjects: "Passed projects",
    buttonSystemStyleProps: buttonSystemStyle2Data,
};

const buttonSystemStyle3Data = {
    learnMore: "let’s talk",
    className: "button-style-1",
};

const callToActionCenterData = {
    readyToEvolveYour: <>ready to evolve your business?<br />We’re ready to help-</>,
    buttonSystemStyleProps: buttonSystemStyle3Data,
};

const footerData = {
    evolveYourBrandAn: "evolve your brand and business into web 3.",
    about: "about",
    services: "services",
    work: "work",
    web3: "web 3",
    place: "contact",
    x2022PrsnaStudioL: "©2022 prsna studio llc. All rights reserved.",
    prsnaStudioLlc: "//prsna studio llc",
};

const mainLandingPageDesktopData = {
    spanText1: "evolve ",
    spanText2: "your brand and business ",
    spanText3: "into web 3",
    intoWeb3: "into web 3",
    evolve: "evolve",
    about: "about",
    services: "services",
    work: "work",
    web3: "web 3",
    largeImageCenterProps: centerCopyStyleData,
    largeImageCenterProps2: largeImageCenterData,
    iconDisplayCenterProps: iconDisplayCenterData,
    callToActionCenterProps: callToActionCenterData,
    footerProps: footerData,
};


