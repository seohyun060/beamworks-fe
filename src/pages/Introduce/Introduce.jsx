import React from "react";

import IntroduceAbout from "./component/IntroduceAbout";
import IntroduceSlogun from "./component/IntroduceSlogun";
import IntroduceMission from "./component/IntroduceMission";
import IntroduceMissionCarousel from "./component/IntroduceMissionCarousel";
import IntroduceBusiness from "./component/IntroduceBusiness";
import IntroduceGoals from "./component/IntroduceGoals";

import "./styles/introduce.css";

const Introduce = () => {
  return (
    <>
      <div className="Introduce">
        {/* 슬로건 섹션 */}
        <IntroduceSlogun />
        {/* 인사말 섹션 */}
        <IntroduceAbout />
        {/* 빔웍스의 미션 섹션 */}
        <IntroduceMission />
        {/* 미션설명 섹션 */}
        <IntroduceMissionCarousel/>
        {/* 빔웍스의 사업분야 */}
        <IntroduceBusiness />
        {/* 목표 */}
        <IntroduceGoals />
      </div>
    </>
  );
};

export default Introduce;
