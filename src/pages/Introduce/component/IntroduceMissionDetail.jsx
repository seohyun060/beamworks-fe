import React from "react";

import images from "src/assets/images";

const IntroduceMissionDetail = (props) => {
  const { title, content, imageName } = props;

  return (
    <section className="IntroduceMissionDetail">
      <div className="Mission">
        <div className="Contents">
          <div className="MissionDetailTitle">
            <label>{title}</label>
          </div>
          <div className="MissionDetailDescription">
            <label>{content}</label>
          </div>
        </div>
        <img className="MissionDetailImage" src={images[imageName]} />
      </div>
    </section>
  );
};

export default IntroduceMissionDetail;
