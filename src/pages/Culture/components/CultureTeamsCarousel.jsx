import React, { useState, useRef, useEffect } from "react";

import "../styles/culture.css";

import CultureTeams from "./CultureTeams";

import TeamsData from "../CultureTeams.json";
import images from "src/assets/images";

// 이동하는 케러셀에서 디자인이 변경, 이동하는 부분은 주석으로 남겨놓음

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

const CultureTeamsCarousel = () => {
  const [currentCarouselPage, setCurrentCarouselPage] = useState(0);

  const carouselRef = useRef(0);
  const [carouselMoving, setCarouselMoving] = useState(0);

  // Progress Bar
  const makeDotbar = (targetIndex) => {
    const dotbar = [];
    for (let i = 0; i < TeamsData.data.length; i++) {
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
      // carouselRef.current.style.transform = `translateX(${
      //   -(currentCarouselPage - 1) * 132
      // }em)`;
      setCurrentCarouselPage((prev) => prev - 1);
    }
    // 첫페이지일 때
    if (currentCarouselPage === 0) {
      // carouselRef.current.style.transform = `translateX(${
      //   -(TeamsData.data.length - 1) * 132
      // }em)`;
      setCurrentCarouselPage(TeamsData.data.length - 1);
    }
  };

  // 앞으로가기 버튼 액션
  const carouselMoveForward = () => {
    if (currentCarouselPage < TeamsData.data.length) {
      // carouselRef.current.style.transform = `translateX(${
      //   -(currentCarouselPage + 1) * 132
      // }em)`;
      setCurrentCarouselPage((prev) => prev + 1);
    }
    //마지막 페이지일 때
    if (currentCarouselPage >= TeamsData.data.length - 1) {
      // carouselRef.current.style.transform = `translateX(${0}em)`;
      setCurrentCarouselPage(0);
    }
  };

  useEffect(() => {
    // css에서 주지않고 직접 지정
    carouselRef.current.style.transition = "transform 0.4s ease-in-out";
    console.log(TeamsData.data);
  }, []);

  // 4초에 한번씩 자동으로 넘어감
  useInterval(() => {
    // carouselMoveForward();
  }, 4000);

  return (
    <>
      <section className="CultureTeamsCarousel">
        <img
          src={images.carousel_backward}
          onClick={carouselMoveBackward}
        ></img>
        <article className="TeamsCarousel">
          <div className="Carousel" ref={carouselRef}>
            {TeamsData.data.map((data, index) => (
              <CultureTeams
                name={data.name}
                projects={data.projects}
                information={data.information}
                imageName={data.imageName}
                progressDotSet={makeDotbar(index)}
                target={currentCarouselPage === index}
              />
            ))}
          </div>
        </article>
        <img src={images.carousel_forward} onClick={carouselMoveForward}></img>
      </section>
    </>
  );
};

export default CultureTeamsCarousel;
