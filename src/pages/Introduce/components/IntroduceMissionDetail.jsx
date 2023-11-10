import React, { useState } from "react";

import images from "src/assets/images";

const IntroduceMissionDetail = (props) => {
  const { title, content, imageName, progressDotSet } = props;

  return (
    <div className="MissionDetail">
      <div className="Contents">
        <div className="ProgressDotbar">
          {progressDotSet.map((data) => (
            <img src={data} />
          ))}
        </div>
        <div className="MissionDetailTitle">
          <label>{title}</label>
        </div>
        <div className="MissionDetailDescription">
          <label>{content}</label>
        </div>
      </div>
      <img className="MissionDetailImage" src={images[imageName]} />
    </div>
  );
};

export default IntroduceMissionDetail;
