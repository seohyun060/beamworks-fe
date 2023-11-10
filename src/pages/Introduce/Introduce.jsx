import React from "react";

import IntroduceAbout from "./components/IntroduceAbout";
import IntroduceSlogun from "./components/IntroduceSlogun";
import IntroduceMission from "./components/IntroduceMission";
import IntroduceMissionCarousel from "./components/IntroduceMissionCarousel";
import IntroduceMissionDetail from "./components/IntroduceMissionDetail";
import IntroduceBusiness from "./components/IntroduceBusiness";
import IntroduceGoals from "./components/IntroduceGoals";
import Footer from "src/pages/Footer/Footer";

import MissionData from "./MissionData";
import images from "src/assets/images";

import "./styles/introduce.css";

const Introduce = () => {
  const makeDotbar = (targetIndex) => {
    const dotbar = [];
    for (let i = 0; i < MissionData.length; i++) {
      if (targetIndex === i) {
        dotbar.push(images.paging_dot_dark);
      } else {
        dotbar.push(images.paging_dot_medium);
      }
    }
    return dotbar;
  };

  return (
    <div className="Introduce">
      {/* 슬로건 섹션 */}
      <IntroduceSlogun />
      {/* 인사말 섹션 */}
      <IntroduceAbout />
      {/* 빔웍스의 미션 섹션 */}
      <IntroduceMission />
      {/* 미션설명 섹션 */}
      <IntroduceMissionCarousel
        items={MissionData.data.map((data, index) => (
          <IntroduceMissionDetail
            title={data.title}
            content={data.content}
            imageName={data.imageName}
            progressDotSet={makeDotbar(index)}
          />
        ))}
      />
      {/* 빔웍스의 사업분야 */}
      <IntroduceBusiness />
      {/* 목표 */}
      <IntroduceGoals />
      {/* 뉴스레터 구독 */}
      <Footer />
    </div>
  );
};

export default Introduce;
