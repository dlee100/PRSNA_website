import { useEffect } from "react";
import Counter from "../utils/Counter";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import prsnaLogo from "../../assets/img/prsna-logo-full-color.svg";
import loadingBar from "../../assets/img/loading-bar.svg";

import "./styleguide.css";
import "./style.css";


const LoadingScreen = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    setTimeout(()=> {
      navigate('/home')
    }, 6000)
  })

  return (
    <motion.div initial={{opacity: 0 }} animate={{opacity: 1 }} exit={{opacity: 0 }} transition={{ duration: 1 }}>
      <div className="container-center-horizontal">
        <div className="prsnastudiowebsiteloadingscreendesktop screen" >
          <img className="prsna_-logo_loading-screen" alt="prsna-logo" src={prsnaLogo} />
          <div className="loading-bar" >
            <motion.img layout
              animate={{ width: "80%" }}
              transition={ { duration: 5 }}
              className="group-44"
              alt="loading-bar"  
              src={loadingBar} 
              />
            <div className="percent nbarchitekt-regular-normal-thunderbird-20px" >
              <Counter from={0} to={100} />
            </div>
          </div>
          <div className="place-container nbarchitekt-regular-normal-silver-chalice-30px" >
            <h1 className="place" >
              <span className="nbarchitekt-regular-normal-silver-chalice-30px">Welcome</span>
            </h1>
            <div className="place-1" >
              <span className="nbarchitekt-regular-normal-silver-chalice-30px">Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default LoadingScreen;