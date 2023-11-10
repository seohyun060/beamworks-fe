import React from "react";

import CultureSlogun from "./components/CultureSlogun";
import CultureEnvironment from "./components/CultureEnvironment";
import CultureOrganization from "./components/CultureOrganization";

import "./styles/culture.css";

const Culture = () => {
  return (
    <div className="Culture">
      {/* 팀웍스 팀문화 */}
      <CultureSlogun />
      {/* 빔웍스의 업무환경 */}
      <CultureEnvironment />
      {/* 빔웍스의 조직도 */}
      <CultureOrganization />
    </div>
  );
};

export default Culture;
