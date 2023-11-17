import React, { useState, useRef } from "react";

import EnvironmentData from "../CultureEnvironment.json";

import images from "src/assets/images";

const CultureEnvironment = () => {
  const environmentData = EnvironmentData.data;

  const [isSubjectClicked, setIsSuvjectClicked] = useState(0);
  const carouselImageRef = useRef();
  const onSubjectClick = (index) => {
    setIsSuvjectClicked(index);
    carouselImageRef.current.style.transform = `translateY(
        -${38 * index}vh
    )`;
  };

  return (
    <section className="CultureEnvironment">
      <article className="Environment">
        <div className="EnvironmentHead">
          <div className="EnvironmentTitle">
            <label>빔웍스의 업무환경</label>
          </div>
          <div className="EnvironmentSubtitle">
            <label>직원들의 행복과 효율성을 최우선으로,</label>
          </div>
          <div className="EnvironmentDescription">
            <label>
              빔웍스의 업무환경은 직원들이 업무와 개인 생활을 균형있게 유지하며,
              <br />
              자신의 역량을 최대한 발휘할 수 있는 장소입니다.
            </label>
          </div>
        </div>
        <div className="EnvironmentContents">
          <div className="EnvironmentSubject">
            <div className="SubjectList">
              {environmentData.map((data, index) => (
                <div className="Subject">
                  <label
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
          <div className="EnvironmentCarousel">
            <div className="EnvironmentImage" ref={carouselImageRef}>
            {environmentData.map((data) => (
                <img src={images[data.imageName]} />
              ))}
              
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CultureEnvironment;
