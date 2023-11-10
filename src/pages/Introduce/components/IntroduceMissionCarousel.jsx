import React, { useState, useRef, useEffect } from "react";

import images from "src/assets/images";

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

const IntroduceMissionCarousel = (props) => {
  const { items } = props;
  const [currentCarouselPage, setCurrentCarouselPage] = useState(0);

  const carouselRef = useRef(1);
  const [carouselMoving, setCarouselMoving] = useState(0);

  // 뒤로가기 버튼 액션
  const carouselMoveBackward = () => {
    const carouselSize =
      carouselRef.current.offsetWidth + carouselRef.current.offsetWidth * 0.1;
    if (currentCarouselPage !== 0) {
      carouselRef.current.style.transform = `translateX(${
        carouselMoving + carouselSize
      }px)`;
      setCarouselMoving((prev) => prev + carouselSize);
      setCurrentCarouselPage((prev) => prev - 1);
    }
    // 첫페이지일 때
    if (currentCarouselPage === 0) {
      carouselRef.current.style.transform = `translateX(${
        -carouselSize * (items.length - 1)
      }px)`;
      setCarouselMoving(-carouselSize * (items.length - 1));
      setCurrentCarouselPage(items.length - 1);
    }
  };

  // 앞으로가기 버튼 액션
  const carouselMoveForward = () => {
    console.log(currentCarouselPage);
    const carouselSize =
      carouselRef.current.offsetWidth + carouselRef.current.offsetWidth * 0.1;
    if (currentCarouselPage < items.length - 1) {
      carouselRef.current.style.transform = `translateX(${
        carouselMoving - carouselSize
      }px)`;

      setCarouselMoving((prev) => prev - carouselSize);
      setCurrentCarouselPage((prev) => prev + 1);
    }
    //마지막 페이지일 때
    if (currentCarouselPage >= items.length - 1) {
      carouselRef.current.style.transform = `translateX(${0}px)`;
      setCarouselMoving(0);
      setCurrentCarouselPage(0);
    }
  };

  useEffect(() => {
    // css에서 주지않고 직접 지정
    carouselRef.current.style.transition = "transform 0.4s ease-in-out";
    console.log(carouselRef.current.offsetWidth);
  }, []);

  useEffect(() => {
    // 윈도우 크기 변할 시 반응형
    window.addEventListener("resize", function () {
      carouselRef.current.style.transform = `translateX(${
        -carouselRef.current.offsetWidth * currentCarouselPage
      }px)`;
      setCarouselMoving(-carouselRef.current.offsetWidth * currentCarouselPage);
    });
  });

  useInterval(() => {
    carouselMoveForward();
  }, 4000);

  return (
    <section className="IntroduceMissionCarousel">
      <img src={images.carousel_backward} onClick={carouselMoveBackward}></img>
      <article className="MissionCarousel">
        <div className="Carousel" ref={carouselRef}>
          {items}
        </div>
      </article>
      <img src={images.carousel_forward} onClick={carouselMoveForward}></img>
    </section>
  );
};

export default IntroduceMissionCarousel;
