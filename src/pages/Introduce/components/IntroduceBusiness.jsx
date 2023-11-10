import React from "react";

import images from "src/assets/images";
import "../styles/introduce.css";

const IntroduceBusiness = () => {
  return (
    <section className="IntroduceBusiness">
      <article className="Business">
        <div className="BusinessTitle">
          <label>빔웍스의 사업분야</label>
        </div>
        <div className="BusinessSubTitle">
          <label>인공지능 의료 플랫폼</label>
        </div>
        <div className="BusinessDescription">
          <label>
            저희는 인공지능 의료 솔루션을 개발하여 의료 데이터 분석, 진단 지원,
            환자 관리 등 다양한 의료 영역에서 혁신을 이끌고 있습니다.
          </label>
        </div>
        <div className="BusinessImage">
          <img src={images.business_image1}/>
          <img src={images.business_image2}/>
        </div>
      </article>
    </section>
  );
};

export default IntroduceBusiness;
