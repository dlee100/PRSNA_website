import { useEffect } from "react";
import Counter from "../utils/Counter";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
          <img className="prsna_-logo_loading-screen" alt="prsna-logo" src="https://anima-uploads.s3.amazonaws.com/projects/6215578908245f0a14cf0140/releases/62155a0fd98caca3fa3450ab/img/prsna-logo-loading-screen-2@2x.png" />
          <div className="loading-bar" >
            <motion.img layout
              animate={{ width: "80%" }}
              transition={ { duration: 5 }}
              className="group-44"  
              src="https://anima-uploads.s3.amazonaws.com/projects/6215578908245f0a14cf0140/releases/62155a0fd98caca3fa3450ab/img/group-44-2@2x.png" 
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