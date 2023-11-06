import React from "react";

import IntroduceSlogun from "./component/IntroduceSlogun";
import IntroduceGoals from "./component/IntroduceGoals";
import "./styles/introduce.css";

const Introduce = () => {
  return (
    <div className="Introduce">
      {/* 슬로건 섹션 */}
      <IntroduceSlogun />
      {/* 목표설명 섹션 */}
      <IntroduceGoals />
    </div>
  );
};

export default Introduce;
