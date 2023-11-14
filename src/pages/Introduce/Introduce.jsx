import React from "react";

import IntroduceAbout from "./components/IntroduceAbout";
import IntroduceSlogun from "./components/IntroduceSlogun";
import IntroduceMission from "./components/IntroduceMission";
import IntroduceMissionCarousel from "./components/IntroduceMissionCarousel";
import IntroduceBusiness from "./components/IntroduceBusiness";
import IntroduceGoals from "./components/IntroduceGoals";
import Footer from "src/pages/Footer/Footer";

import images from "src/assets/images";

const Introduce = () => {

  return (
    <div className="Introduce">
      {/* 슬로건 섹션 */}
      <IntroduceSlogun />
      {/* 인사말 섹션 */}
      <IntroduceAbout />
      {/* 빔웍스의 미션 섹션 */}
      <IntroduceMission />
      {/* 미션설명 섹션 */}
      <IntroduceMissionCarousel />
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
