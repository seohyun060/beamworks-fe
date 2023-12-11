import React from "react";

const RecruitmentHeader = () => {
  return (
    <>
    {/* 헤더 */}
      <article className="RecruitmentHeader">
        <div className="PageName">
          <label>지원하기</label>
        </div>
        <div className="HeaderTitle">
          <label>BeamWorks에서 함께 성장해요.</label>
        </div>
        <div className="HeaderDescription">
          <label>
            BeamWorks에서 함께 성장하고 싶다면, 아래의 이력서 폼을 작성해주세요.
            <br />
            담당자가 내부 검토를 거쳐 메일로 회신 드리겠습니다.
          </label>
        </div>
      </article>
    </>
  );
};

export default RecruitmentHeader;
