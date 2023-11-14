import React from "react";

import CultureSlogun from "./components/CultureSlogun";
import CultureEnvironment from "./components/CultureEnvironment";
import CultureOrganization from "./components/CultureOrganization";
import CultureTeamsCarousel from "./components/CultureTeamsCarousel";
import Footer from "src/pages/Footer/Footer";

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
      {/* 팀 소개 캐러셀*/}
      <CultureTeamsCarousel />
      {/* 뉴스레터 구독 */}
      <Footer />
    </div>
  );
};

export default Culture;
