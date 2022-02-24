import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Redirect from "./components/utils/Redirect";
import { AnimatePresence } from "framer-motion";

// View Components
import MainLandingPageDesktop from "./components/Home/MainLandingPageDesktop";
import LoadingScreen from "./components/Loading/LoadingScreen";

function App() {
  const location = useLocation();

  return (
     <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Redirect to="/loading" />} />
            <Route path="/home" element={<MainLandingPageDesktop />} />
            <Route path="/loading" element={<LoadingScreen/>} />
          </Routes>
     </AnimatePresence>
  );
}

export default App;
