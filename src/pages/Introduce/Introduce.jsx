import React from "react";

import IntroduceSlogun from "./component/IntroduceSlogun";
import IntroduceMission from "./component/IntroduceMission";
import IntroduceMissionDetail from "./component/IntroduceMissionDetail";
import IntroduceGoals from "./component/IntroduceGoals";

import MissionData from "./MissionData";
import "./styles/introduce.css";

const Introduce = () => {
  return (
    <div className="Introduce">
      {/* 슬로건 섹션 */}
      <IntroduceSlogun />
      {/* 빔웍스의 미션 섹션 */}
      <IntroduceMission />
      {/* 미션설명 섹션 */}
      {MissionData.data.map((data) => (
        <IntroduceMissionDetail
          title={data.title}
          content={data.content}
          imageName={data.imageName}
        />
      ))}
      {/* 목표 */}
      <IntroduceGoals />
    </div>
  );
};

export default Introduce;
