import React, { useRef } from "react";

import images from "src/assets/images";

const RecruitmentJobCard = (props) => {
  const { jobName, imageName, carouselItemRef, isVisible } = props;

  return (
    <div
      className={
        isVisible ? "RecruitmentJobCard" : "RecruitmentJobCard unactive"
      }
      ref={carouselItemRef}
    >
      <img src={images[imageName]} />
      <div className="JobName">
        <label>{jobName}</label>
      </div>
      <div className="GoDetails">
        <label>직무확인</label>
        <img src={images.go_details} />
      </div>
    </div>
  );
};

export default RecruitmentJobCard;
