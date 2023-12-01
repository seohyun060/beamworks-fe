import React from "react";

import OrcaMain from "./components/OrcaMain";
import OrcaIntroduce from "./components/OrcaIntroduce";
import OrcaDemo from "./components/OrcaDemo";
import OrcaVision from "./components/OrcaVision";

import "./styles/orca.css";

const index = () => {
  return (
    <div className="Orca">
      <OrcaMain />
      <OrcaIntroduce />
      <OrcaDemo />
      <OrcaVision />
    </div>
  );
};

export default index;
