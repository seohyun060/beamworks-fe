import React from "react";

import images from "src/assets/images";

const IntroduceGoals = () => {
  return (
    <section className="IntroduceGoals">
      <div className="Goals">
        <img className="BeamworksLogo" src={images.logo_black} />
        <div className="GoalDetails1">
          <label>
            우리의 핵심 가치는 전 세계 어디에서나 높은 수준의 진단 환경을 모든
            사람 에게 동등하게 제공하는 것입니다.
          </label>
        </div>
        <div className="GoalDescription">
          <img src={images.goal_description} />
        </div>
        <div className="GoalDetails2">
          <label>
            우리는 혁신적인 인공지능 기수을 활용하여 이료 서비스를 전세계
            어디에서나 접근 가능할 수 있도록 하며, 정확하게 제공하기 위해
            노력하고 있습니다.
          </label>
        </div>
      </div>
    </section>
  );
};

export default IntroduceGoals;
