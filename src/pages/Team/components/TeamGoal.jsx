import React from "react";

import images from "src/assets/images";

const TeamGoal = () => {
  return (
    <section className="TeamGoal">
      <div className="GoalDescription">
        <div className="Goal">
          <p>
            효과적인 디자인은 제품과 서비스의 가치를 강조하며 경쟁우위를
            확보합니다. 또한, 사용자 중심의 디자인은 고객 만족도를 높여 기업의
            성과를 향상시킵니다.
            <br />
            사용자가 제품을 통해 어떤 경험을 할 수 있는지에 중점을 두어 성공적인
            디자인을 추구합니다.
          </p>
        </div>
      </div>
      <div className="ImageSection">
        <img src={images.marketing_design_goal} />
      </div>
    </section>
  );
};

export default TeamGoal;
