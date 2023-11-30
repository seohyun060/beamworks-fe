import React from "react";

import OrcaMain from "./components/OrcaMain";
import OrcaIntroduce from "./components/OrcaIntroduce";

import "./styles/orca.css";

const index = () => {
  return (
    <div className="Orca">
      <OrcaMain />
      <OrcaIntroduce />
    </div>
  );
};

export default index;
