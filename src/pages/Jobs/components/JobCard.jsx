import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import images from "src/assets/images";

const JobCard = (props) => {
  const navitage = useNavigate();
  const { jobName, link, imageName, isVisible } = props;

  const cardRef = useRef(0);

  useEffect(() => {
    // css에서 주지않고 직접 지정
    cardRef.current.style.transition = "transform 0.5s ease-in-out";
  }, []);

  return (
    <div
      className={isVisible ? "JobsJobCard" : "JobsJobCard unactive"}
      ref={cardRef}
    >
      <img src={images[imageName]} />
      <div className="JobName">
        <label>{jobName}</label>
      </div>
      <Link to={`/team/${link}`}>
        <div className="GoDetails">
          <label>직무확인</label>
          <img src={images.go_details} />
        </div>
      </Link>
    </div>
  );
};

export default JobCard;
