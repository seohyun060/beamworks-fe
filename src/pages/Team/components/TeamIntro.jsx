import React from "react";

import "../styles/team.css";
import images from "src/assets/images";

const TeamIntro = () => {
  return (
    <section className="TeamIntro">
      <div className="Description">
        <div className="Title">
          <span>마케팅 디자인팀</span>
        </div>
        <div className="Slogun">
          <p>
            아름다운 디자인은 숨은 노력과 아이디어를,
            <br />
            창의적인 마케팅은 혁신을 전 세계에 널리 알립니다.
          </p>
        </div>
      </div>
      <div className="ImageSection">
        <img src={images.marketing_design_intro} />
      </div>
    </section>
  );
};

export default TeamIntro;
