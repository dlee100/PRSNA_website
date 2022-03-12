import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import prsnaLoading from "../../assets/img/PRSNAstudios_LoaderAnimation.gif";

import "./styleguide.css";
import "./style.css";


const LoadingScreen = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    setTimeout(()=> {
      navigate('/home')
    }, 7000)
  })

  return (
      <div className="container-center-horizontal">
        <div className="prsnastudiowebsiteloadingscreendesktop screen" >
          <img src={prsnaLoading} alt="loading screen" className="loading-screen" />
        </div>
      </div>
  );
}

export default LoadingScreen;