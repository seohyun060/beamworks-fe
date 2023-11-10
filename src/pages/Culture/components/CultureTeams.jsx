import React from "react";

import images from "src/assets/images";
import "../styles/culture.css";

const CultureTeams = () => {
  return (
    <section className="CultureTeams">
      <div className="progressBar"></div>
      <article className="Teams">
        <div className="TeamInformation">
          <div className="TeamName">
            <label>
              Predictive and
              <br /> Generative AI Team (PGAT)
            </label>
          </div>
          <div className="TeamProjects">
            <label>
              Predictive AI
              <br />
              Generative AI
            </label>
          </div>
          <div className="TeamDescription">
            <label>
              디지털의 신비한 세계를 개척하는 혁신의 중심지입니다. 우리 팀은
              코드로 아이디어를 현실로 만들며, 새로운 기술과 창의적인 해결책을
              통해 미래를 만들어갑니다. 업계를 선도하고, 기술적 역량을 끊임없이
              향상시키며, 혁신적인 프로젝트를 실현합니다.
            </label>
            <div className="GoDetails">
              <label>자세히 알아보기</label>
              <img src={images.go_details}/>
            </div>
          </div>
        </div>
        <div className="TeamImage">
          <img src={images.business_image1} />
        </div>
      </article>
    </section>
  );
};

export default CultureTeams;
