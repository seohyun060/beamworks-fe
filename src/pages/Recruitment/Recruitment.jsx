import React from "react";

import RecruitmentHeader from "./components/RecruitmentHeader";
import RecruitmentContents from "./components/RecruitmentContents";
import RecruitmentFooter from "./components/RecruitmentFooter";

import "./styles/recruitment.css"

import images from "src/assets/images";

// Contact Us 페이지
const Recruitment = () => {
  return (
    <div className="Recruitment">
      <section>
        {/* 문의하기 설명 */}
        <RecruitmentHeader />
        {/* 내용 */}
        <RecruitmentContents />
      </section>
      {/* 하단 기업정보 */}
      <RecruitmentFooter />
    </div>
  );
};

export default Recruitment;
