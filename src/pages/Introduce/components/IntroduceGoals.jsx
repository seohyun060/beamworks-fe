import React from "react";

import images from "src/assets/images";

const IntroduceGoals = () => {
  return (
    <section className="IntroduceGoals">
      <article className="Goals">
        <img className="BeamworksLogo" src={images.logo_black} />
        <div className="GoalDetailBox">
          <div className="GoalDetails1">
            <label>
              전 세계 어디에서나 높은 수준의 진단 환경을 모든 사람 에게 동등하게
              제공하는 것입니다.
            </label>
          </div>
          <div className="GoalDetails2">
            <label>
              혁신적인 인공지능 기술을 활용하여 의료 서비스를 전세계 어디에서나
              접근 가능할 수 있도록 합니다.
            </label>
          </div>
        </div>
        <div className="GoalDescription">
          <img src={images.goal_description} />
        </div>
      </article>
    </section>
  );
};

export default IntroduceGoals;
