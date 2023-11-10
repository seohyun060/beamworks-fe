import React from "react";

import images from "src/assets/images";

const CultureSlogun = () => {
  return (
    <section className="CultureSlogun">
      <article className="Slogun">
        <div className="SlogunTitle">
          <label>
            BeamWorks와 함께
            <br />
            성장하는 여정을 시작하세요
          </label>
        </div>
        <div className="SlogunDescription">
          <label>
            당신의 역량과 우리의 비전이 어우러지는 곳, 빔웍스
            <br />
            도전하고 함께 성장해나아가요.
          </label>
        </div>
        <div className="SlogunImage">
          <img src={images.culture_slogun} />
        </div>
      </article>
    </section>
  );
};

export default CultureSlogun;
