import React from "react";
import images from "src/assets/images";

const OrcaIntroduce = () => {
  return (
    <section className="OrcaIntroduce">
      <img className="WorldMap" src={images.world_map}/>
      <div className="Description">
        <div className="SuggestPhrase">
          <span>ORCA그룹에 가입해보세요.</span>
        </div>
        <div className="Title">
          <p>BeamWorks 연구원 함께 성장해나아가요.</p>
        </div>
        <div className="Goals">
          <p>
            ORCA (Optimized Research in Clinical AI) 그룹은 BeamWorks에서
            활동하는 AI 전문가와 임상 연구자들의 팀으로, 주로 의료 응용에 중점을
            둡니다. 의료 분야에서 인공 지능 기술을 개발하고, 진단 및 치료 방법
            개선과 의료 정보 시스템 혁신을 목표로 합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrcaIntroduce;
