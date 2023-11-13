import React from "react";

import CultureSlogun from "./components/CultureSlogun";
import CultureEnvironment from "./components/CultureEnvironment";
import CultureOrganization from "./components/CultureOrganization";
import CultureTeams from "./components/CultureTeams";
import CultureTeamsCarousel from "./components/CultureTeamsCarousel";
import Footer from "src/pages/Footer/Footer";

import "./styles/culture.css";

import TeamsData from "./CultureTeams.json";

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
      <CultureTeamsCarousel
        items={TeamsData.data.map((data) => (
          <CultureTeams
            name={data.name}
            projects={data.projects}
            information={data.information}
            imageName={data.imageName}
          />
        ))}
      />
      {/* 뉴스레터 구독 */}
      <Footer />
    </div>
  );
};

export default Culture;
