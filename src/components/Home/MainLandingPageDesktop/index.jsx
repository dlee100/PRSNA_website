import React from "react";
import Ruler2 from "../Ruler2";
import CenterCopyStyle from "../CenterCopyStyle";
import LargeImageCenter from "../LargeImageCenter";
import IconDisplayCenter from "../IconDisplayCenter";
import CallToActionCenter from "../CallToActionCenter";
import Footer from "../Footer";
import { motion } from "framer-motion";
import "./styleguide.css"
import "./MainLandingPageDesktop.css";

// assets
import HomePageHudBorder from "../../../assets/img/homepage-hud-border.svg";
import Ruler from "../../../assets/img/ruler.svg";
import prsnaLogo from "../../../assets/img/prsna-logo-full-color@2x.svg";
import backgroundGrid from "../../../assets/img/background-grid.svg";
import textMatrix from "../../../assets/img/text-matrix@2x.svg";

function MainLandingPageDesktop() {

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <div className="container-center-horizontal">
        <div className="main-landing-page-desktop screen">
          <div className="overlap-group4">
            <img
              alt="img"
              className="background-grid"
              src={backgroundGrid}
            />
            <img
              alt="img"
              className="prsna_-logo_-full-color"
              src={prsnaLogo}
            />
            <img
              alt="img"
              className="ruler"
              src={Ruler}
            />
            <Ruler2 />
            <h1 className="evolve-your-brand-an">
              <span className="nbarchitekt-bold-cararra-40px">Evolve </span>
              <span className="span1">your brand and business </span>
              <span className="nbarchitekt-bold-cararra-40px">into web 3</span>
            </h1>
            <img
              alt="img"
              className="text-matrix"
              src={textMatrix}
            />
            <CenterCopyStyle />
            <LargeImageCenter />
            <img
              alt="img"
              className="homepage-view-hub-asset"
              id="hud-border"
              src={HomePageHudBorder}
            />
            <div className="about nbarchitekt-regular-normal-silver-chalice-15px">about</div>
            <div className="services nbarchitekt-regular-normal-silver-chalice-15px">services</div>
            <div className="work nbarchitekt-regular-normal-silver-chalice-15px">work</div>
            <div className="web-3 nbarchitekt-regular-normal-silver-chalice-15px">web3</div>
          </div>
          <IconDisplayCenter />
          <CallToActionCenter />
          <Footer />
        </div>
      </div>
    </motion.div>
  );
}

export default MainLandingPageDesktop;
