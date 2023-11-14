import React, { useState, useEffect, useRef } from "react";

import RecruitmentJobCard from "./RecruitmentJobCard";

import images from "src/assets/images";
import RecruitmentJobs from "../RecruitmentJobs.json";

const RecruitmentJob = () => {
  const carouselRef = useRef(0);

  const maxCarouselCount = RecruitmentJobs.data.length - 3;

  const [currentCarouselPage, setCurrentCarouselPage] = useState(0);

  const carouselMoveBackward = () => {
    if (currentCarouselPage - 3 >= 0) {
      // JobCard의 크기(마진포함) 40.8em
      carouselRef.current.style.transform = `translateX(${
        -(currentCarouselPage - 3) * 40.8
      }em)`;
      setCurrentCarouselPage((prev) => prev - 3);
    }
    //남은 카드가 3개 미만일 경우
    else if (currentCarouselPage - 3 < 0) {
      carouselRef.current.style.transform = `translateX(0em)`;
      setCurrentCarouselPage(0);
    }
  };

  const carouselMoveForward = () => {
    if (currentCarouselPage + 3 <= maxCarouselCount) {
      // JobCard의 크기(마진포함) 40.8em
      carouselRef.current.style.transform = `translateX(${
        -(currentCarouselPage + 3) * 40.8
      }em)`;
      setCurrentCarouselPage((prev) => prev + 3);
    }
    //남은 카드가 3개 미만일 경우
    else if (currentCarouselPage + 3 > maxCarouselCount) {
      carouselRef.current.style.transform = `translateX(${
        -(currentCarouselPage + (maxCarouselCount - currentCarouselPage)) * 40.8
      }em)`;
      setCurrentCarouselPage(
        (prev) => prev + (maxCarouselCount - currentCarouselPage)
      );
    }
  };

  useEffect(() => {
    // css에서 주지않고 직접 지정
    carouselRef.current.style.transition = "transform 0.5s ease-in-out";
  }, []);

  useEffect(() => {
    // 윈도우 크기 변할 시 반응형
    window.addEventListener("resize", function () {
      carouselRef.current.style.transition = "";
    });
    carouselRef.current.style.transition = "transform 0.5s ease-in-out";
  });

  return (
    <section className="RecruitmentJob">
      <img src={images.carousel_back} onClick={(e) => carouselMoveBackward()} />
      <article className="Job">
        <div className="TitleHeader">
          <label>주요 직무</label>
          <div className="ApplyButton">
            <label>지원 하기</label>
            <img src={images.go_apply} />
          </div>
        </div>
        <div className="TeamListCarousel">
          <div className="Carousel" ref={carouselRef}>
            {RecruitmentJobs.data.map((data, index) => (
              <RecruitmentJobCard
                jobName={data.jobName}
                imageName={data.imageName}
                isVisible={
                  index >= currentCarouselPage &&
                  index <= currentCarouselPage + 2
                }
              />
            ))}
          </div>
        </div>
      </article>
      <img src={images.carousel_go} onClick={(e) => carouselMoveForward()} />
    </section>
  );
};

export default RecruitmentJob;
