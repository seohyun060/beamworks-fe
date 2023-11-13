import React from "react";

import RecruitmentMain from "./components/RecruitmentMain";
import RecruitmentJob from "./components/RecruitmentJob";
import RecruitmentEnvironment from "./components/RecruitmentEnvironment";
import RecruitmentInternship from "./components/RecruitmentInternship";
import Footer from "src/pages/Footer/Footer";

const Recruitment = () => {
  return (
    <div className="Recruitment">
      {/* 첫번쨰 화면 */}
      <RecruitmentMain />
      {/* 주요 직무 */}
      <RecruitmentJob />
      {/* 업무환경 */}
      <RecruitmentEnvironment />
      {/* 인턴쉽 지원 */}
      <RecruitmentInternship />
      {/* 뉴스레터 구독 */}
      <Footer />
    </div>
  );
};

export default Recruitment;
