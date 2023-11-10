import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

import images from "src/assets/images";

const IntroduceMissionCarousel = (props) => {
  const { items } = props;
  const [carouselItem, setCarouselItem] = useState([
    items[2],
    items[0],
    items[1],
  ]);

  const [currentCarouselPage, setCurrentCarouselPage] = useState(0);

  const carouselRef = useRef(1);
  const [carouselMoving, setCarouselMoving] = useState(0);

  // 뒤로가기 버튼 액션
  const carouselMoveBackward = () => {
    console.log(carouselRef.current.clientWidth);
    const carouselSize = carouselRef.current.clientWidth;
    carouselRef.current.style.transform = `translateX(${
      // carouselMoving + carouselSize
      0
    }px)`;

    setCurrentCarouselPage(currentCarouselPage - 1);
  };

  // 앞으로가기 버튼 액션
  const carouselMoveForward = () => {
    console.log(carouselRef.current.clientWidth);
    const carouselSize = carouselRef.current.clientWidth;
    carouselRef.current.style.transform = `translateX(${
      // carouselMoving - carouselSize
      -carouselSize * 2
    }px)`;

    setCurrentCarouselPage(currentCarouselPage + 1);
  };

  // 화면의 크기가 변경될 때 캐러셀의 크기 조절필요
  // swiper 라이브러리?

  useLayoutEffect(() => {
    setTimeout(() => {
      console.log("move");
      setCarouselItem([
        items[(2 + currentCarouselPage) % 3],
        items[(0 + currentCarouselPage) % 3],
        items[(1 + currentCarouselPage) % 3],
      ]);
      carouselRef.current.style.transition = "";
      carouselRef.current.style.transform = `translateX(-${carouselRef.current.clientWidth}px)`;
    }, 400);
    carouselRef.current.style.transition = "transform 0.4s ease-in-out";
  }, [currentCarouselPage]);

  useEffect(() => {
    // css에서 주지않고 직접 지정
    carouselRef.current.style.transition = "transform 0.4s ease-in-out";
    console.log(carouselRef.current.clientWidth);
    carouselRef.current.style.transform = `translateX(-${carouselRef.current.clientWidth}px)`;
    setCarouselMoving(-carouselRef.current.clientWidth);
  }, []);

  return (
    <section className="IntroduceMissionCarousel">
      <img src={images.carousel_backward} onClick={carouselMoveBackward}></img>
      <article className="MissionCarousel">
        <div className="Carousel" ref={carouselRef}>
          {carouselItem}
        </div>
      </article>
      <img src={images.carousel_forward} onClick={carouselMoveForward}></img>
    </section>
  );
};

export default IntroduceMissionCarousel;
