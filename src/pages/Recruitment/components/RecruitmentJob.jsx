import React from "react";

import RecruitmentJobCard from "./RecruitmentJobCard";

import images from "src/assets/images";
import RecruitmentJobs from "../RecruitmentJobs.json";

const RecruitmentJob = () => {
  return (
    <section className="RecruitmentJob">
      <img src={images.carousel_back} />
      <article className="Job">
        <div className="TitleHeader">
          <label>주요 직무</label>
          <div className="ApplyButton">
            <label>지원 하기</label>
            <img src={images.go_apply} />
          </div>
        </div>
        {/* 캐러셀 개발 */}
        <div className="TeamListCarousel">
          <div className="Carousel">
            {RecruitmentJobs.data.map((data) => (
              <RecruitmentJobCard
                jobName={data.jobName}
                imageName={data.imageName}
              />
            ))}
          </div>
        </div>
      </article>
      <img src={images.carousel_go} />
    </section>
  );
};

export default RecruitmentJob;
