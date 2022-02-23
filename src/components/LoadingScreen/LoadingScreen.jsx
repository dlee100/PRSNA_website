import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion"

const LoadingScreen = (props) => {
  const { prsna_Logo_LoadingScreen, loadingBarImg, percent, spanText2, spanText3 } = props;
  const [updatedPercent, setUpdatedPercent] = useState(percent);

  const x = useMotionValue(0)
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0])

  return (
    <div className="container-center-horizontal">
      <div className="prsnastudiowebsiteloadingscreendesktop screen" >
        <img className="prsna_-logo_loading-screen"  src={prsna_Logo_LoadingScreen} />
        <div className="loading-bar" >
          <motion.img transition={{ duration: 5 }} className="group-44"  src={loadingBarImg} />
          <div className="percent nbarchitekt-regular-normal-thunderbird-20px" >
            <span className="nbarchitekt-regular-normal-thunderbird-20px">20%</span>
          </div>
        </div>
        <div className="place-container nbarchitekt-regular-normal-silver-chalice-30px" >
          <h1 className="place" >
            <span className="nbarchitekt-regular-normal-silver-chalice-30px">{spanText2}</span>
          </h1>
          <div className="place-1" >
            <span className="nbarchitekt-regular-normal-silver-chalice-30px">{spanText3}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
