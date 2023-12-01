import React from "react";
import images from "src/assets/images";

// R&C s3 코드 참고
const OrcaDemo = () => {
  return (
    <div className="OrcaDemo">
      <div className="OrcaDemoDisplay">
        <div className="ScrollSentence">
          마우스를 화면 위로 올려 스크롤 해보세요.
        </div>
        <img className="DemoDevice" src={images.cadr_mac}></img>
        <div className="ComputerFrame">
          <img className="Contents" src={images.ORCA_demo_computer}></img>
        </div>
        <img className="PhoneScreen" src={images.ORCA_demo_phone}></img>
      </div>
      <div className="OrcaDemoText">
        <div className="bemaworks">BeamWorks</div>
        <div className="Description">
          AI 기술 개발과
          <br />
          의료 소통 혁신을 선도합니다.
        </div>
        <img className="Logo" src={images.ORCA_logo_black}></img>
      </div>
    </div>
  );
};

export default OrcaDemo;
