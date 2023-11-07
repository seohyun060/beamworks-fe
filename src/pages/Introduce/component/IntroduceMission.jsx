import React from "react";

import images from "src/assets/images";
import "../styles/introduce.css";

const IntroduceMission = () => {
  return (
    <section className="IntroduceMission">
      <div className="Mission">
        <div className="MissionTitle">
          <label>빔웍스의 미션</label>
        </div>
        <div className="MissionSubTitle">
          <label>서로를 위한 빔웍스</label>
        </div>
        <div className="MissionDescription">
          <label>
            빔웍스는 직원을 성장을 위해 최선을 다하며
            <br />
            직원은 환자와 의료진을 위해 끊임없이 연구합니다.
          </label>
        </div>
        <img className="MissionImage" src={images.mission_image}/>
      </div>
    </section>
  );
};

export default IntroduceMission;
