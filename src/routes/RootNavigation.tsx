import HomeContainer from "src/pages/Home/containers/HomeContainer";
import GnbContainer from "src/pages/Gnb/containers/GnbContainer";
import AwardContainer from "src/pages/Award/containers/AwardContainer";
import Introduce from "src/pages/Introduce/Introduce";
import Culture from "src/pages/Culture/Culture";

import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  useLocation,
  Route,
  Routes,
} from "react-router-dom";
import "./styles/rootnavigation.style.css";

const RootNavigation = () => {
  const location = useLocation();
  return (
    <>
      <GnbContainer location={location.pathname} />
      <Routes location={location}>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/award" element={<AwardContainer />} />
        <Route path="/culture" element={<Culture />} />
      </Routes>
    </>
  );
};

export default RootNavigation;
