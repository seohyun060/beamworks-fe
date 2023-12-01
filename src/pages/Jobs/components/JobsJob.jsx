import React, { useState, useEffect, useRef } from "react";

import JobsJobCard from "./JobCard";

import images from "src/assets/images";
import JobsJobs from "../JobsList.json";

const JobsJob = () => {
  const carouselRef = useRef(0);

  const maxCarouselCount = JobsJobs.data.length - 3;

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

  return (
    <section className="JobsJob">
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
            {JobsJobs.data.map((data, index) => (
              <JobsJobCard
                key={index}
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

export default JobsJob;
