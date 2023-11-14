import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef } from "react";

import images from "src/assets/images";

const RecruitmentJobCarousel = forwardRef((props, ref) => {
  const { items } = props;
  const [currentCarouselPage, setCurrentCarouselPage] = useState(1);

  const carouselRef = useRef(1);
  const [carouselMoving, setCarouselMoving] = useState(0);

  // 뒤로가기 버튼 액션
  const carouselMoveBackward = () => {
    const carouselSize =
      carouselRef.current.getBoundingClientRect().width * 1.1;
    if (currentCarouselPage !== 1) {
      carouselRef.current.style.transform = `translateX(${
        carouselMoving + carouselSize
      }px)`;
      setCarouselMoving((prev) => prev + carouselSize);
      setCurrentCarouselPage((prev) => prev - 1);
    }
    // 첫페이지일 때
    else if (currentCarouselPage === 1) {
      carouselRef.current.style.transform = `translateX(${
        -carouselSize * (items.length - 1)
      }px)`;
      setCarouselMoving(-carouselSize * (items.length - 1));
      setCurrentCarouselPage(items.length);
    }
  };

  // 앞으로가기 버튼 액션
  const carouselMoveForward = () => {
    console.log(currentCarouselPage);
    const carouselSize =
      carouselRef.current.getBoundingClientRect().width * 1.1;
    if (currentCarouselPage < items.length) {
      carouselRef.current.style.transform = `translateX(${
        carouselMoving - carouselSize
      }px)`;

      setCarouselMoving((prev) => prev - carouselSize);
      setCurrentCarouselPage((prev) => prev + 1);
    }
    //마지막 페이지일 때
    else if (currentCarouselPage >= items.length) {
      carouselRef.current.style.transform = `translateX(${0}px)`;
      setCarouselMoving(0);
      setCurrentCarouselPage(1);
    }
  };

  useImperativeHandle(ref, () => ({
    carouselMoveForward
  }));

  useEffect(() => {
    // css에서 주지않고 직접 지정
    carouselRef.current.style.transition = "transform 0.4s ease-in-out";
    console.log(carouselRef.current.getBoundingClientRect().width);
  }, []);

  useEffect(() => {
    // 윈도우 크기 변할 시 반응형
    window.addEventListener("resize", function () {
      const translateSize = -(
        carouselRef.current.getBoundingClientRect().width *
        1.1 *
        (currentCarouselPage - 1)
      );
      carouselRef.current.style.transform = `translateX(${translateSize}px)`;
      setCarouselMoving(translateSize);
    });
  });

  return (
    <div className="TeamListCarousel">
      <div className="Carousel" ref={carouselRef}>
        {items}
      </div>
    </div>
  );
});

export default RecruitmentJobCarousel;
