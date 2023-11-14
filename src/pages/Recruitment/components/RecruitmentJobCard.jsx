import React, { useEffect, useRef } from "react";

import images from "src/assets/images";

const RecruitmentJobCard = (props) => {
  const { jobName, imageName, isVisible } = props;

  const cardRef = useRef(0);

  useEffect(() => {
    // css에서 주지않고 직접 지정
    cardRef.current.style.transition = "transform 0.5s ease-in-out";
  }, []);

  useEffect(() => {
    // 윈도우 크기 변할 시 반응형
    window.addEventListener("resize", function () {
      cardRef.current.style.transition = "";
    });
    cardRef.current.style.transition = "0.5s ease-in-out";
  });

  return (
    <div
      className={
        isVisible ? "RecruitmentJobCard" : "RecruitmentJobCard unactive"
      }
      ref={cardRef}
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
