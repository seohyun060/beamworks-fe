import React, { useState, useRef } from "react";

import WelfareData from "../CultureWelfare.json";

import images from "src/assets/images";

const CultureWelfare = () => {
  const welfareData = WelfareData.data;

  const [isSubjectClicked, setIsSuvjectClicked] = useState(0);
  const carouselImageRef = useRef();
  const onSubjectClick = (index) => {
    setIsSuvjectClicked(index);
    carouselImageRef.current.style.transform = `translateY(
        -${38 * index}vh
    )`;
  };

  return (
    <section className="CultureWelfare">
      <article className="Welfare">
        <div className="WelfareHead">
          <div className="WelfareTitle">
            <label>빔웍스는 제공합니다.</label>
          </div>
          <div className="WelfareSubtitle">
            <label>직원들의 행복과 효율성을 최우선으로,</label>
          </div>
          <div className="WelfareDescription">
            <label>
              빔웍스의 업무환경은 직원들이 업무와 개인 생활을 균형있게 유지하며,
              <br />
              자신의 역량을 최대한 발휘할 수 있는 장소입니다.
            </label>
          </div>
        </div>
        <div className="WelfareContents">
          <div className="WelfareSubject">
            <div className="SubjectList">
              {welfareData.map((data, index) => (
                <div className="Subject" key={index}>
                  <label
                    key={index}
                    className={index === isSubjectClicked ? "isActive" : ""}
                    onClick={(e) => {
                      onSubjectClick(index);
                    }}
                  >
                    {data.subject}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="WelfareCarousel">
            <div className="WelfareImage" ref={carouselImageRef}>
              {welfareData.map((data, index) => (
                <img key={index} src={images[data.imageName]} />
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CultureWelfare;
