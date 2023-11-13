import React, { useState, useRef } from "react";

import images from "src/assets/images";

const RecruitmentEnvironment = () => {
  const [isClicked, setIsClicked] = useState(0);
  const descriptionRef = useRef(0);

  const onImageClick = (index) => {
    setIsClicked(index);
    descriptionRef.current.style.transform = `translateX(${
      (18 + 2.3) * index
    }em)`;
  };

  return (
    <section className="RecruitmentEnvironment">
      <article className="Environment">
        <div className="EnvironmentTitle">
          <label>업무환경</label>
        </div>
        <div className="EnvironmentDescription">
          <div className="ImageSector">
            <img
              src={images.recruitment_environment1}
              className={isClicked === 0 && "active"}
              onClick={(e) => onImageClick(0)}
            />
            <img
              src={images.recruitment_environment2}
              className={isClicked === 1 && "active"}
              onClick={(e) => onImageClick(1)}
            />
            <img
              src={images.recruitment_environment3}
              className={isClicked === 2 && "active"}
              onClick={(e) => onImageClick(2)}
            />
          </div>
          <div className="DescriptionSector">
            <div className="Moving" ref={descriptionRef}>
              <label>
                빔웍스 회의실은 혁신과 협업을 촉진하며, 팀원들 간의 소통과
                아이디어 공유를 용이하게 합니다. 업무 집중력을 향상시키고,
                창의적인 문제 해결을 촉진합니다.
              </label>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default RecruitmentEnvironment;
