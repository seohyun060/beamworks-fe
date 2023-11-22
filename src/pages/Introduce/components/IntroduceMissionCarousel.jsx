import React, { useState, useRef, useEffect } from "react";

import IntroduceMissionDetail from "./IntroduceMissionDetail";

import MissionData from "../MissionData";
import images from "src/assets/images";

import "../styles/introduce.css";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      const intervalId = setInterval(tick, delay);
      return () => clearInterval(intervalId);
    }
  }, [delay]);
}

const IntroduceMissionCarousel = () => {
  const [currentCarouselPage, setCurrentCarouselPage] = useState(0);

  const carouselRef = useRef(1);

  // 프로그레스 바 생성
  const makeDotbar = (targetIndex) => {
    const dotbar = [];
    for (let i = 0; i < MissionData.data.length; i++) {
      if (targetIndex === i) {
        dotbar.push(images.paging_dot_dark);
      } else {
        dotbar.push(images.paging_dot_medium);
      }
    }
    return dotbar;
  };

  // 뒤로가기 버튼 액션
  const carouselMoveBackward = () => {
    if (currentCarouselPage !== 0) {
      setCurrentCarouselPage((prev) => prev - 1);
    }
    // 첫페이지일 때
    if (currentCarouselPage === 0) {
      setCurrentCarouselPage(MissionData.data.length - 1);
    }
  };

  // 앞으로가기 버튼 액션
  const carouselMoveForward = () => {
    if (currentCarouselPage < MissionData.data.length - 1) {
      setCurrentCarouselPage((prev) => prev + 1);
    }
    //마지막 페이지일 때
    if (currentCarouselPage >= MissionData.data.length - 1) {
      setCurrentCarouselPage(0);
    }
  };

  useInterval(() => {
    // carouselMoveForward();
  }, 4000);

  return (
    <section className="IntroduceMissionCarousel">
      <img src={images.carousel_backward} onClick={carouselMoveBackward}></img>
      <article className="MissionCarousel">
        <div className="Carousel" ref={carouselRef}>
          {MissionData.data.map((data, index) => (
            <IntroduceMissionDetail
              key={index}
              title={data.title}
              content={data.content}
              imageName={data.imageName}
              progressDotSet={makeDotbar(index)}
              target={currentCarouselPage === index}
            />
          ))}
        </div>
      </article>
      <img src={images.carousel_forward} onClick={carouselMoveForward}></img>
    </section>
  );
};

export default IntroduceMissionCarousel;
