import React, { useState } from "react";

import RecruitmentApply from "./RecruitmentApply";

import images from "src/assets/images";

const RecruitmentContents = () => {
  return (
    <>
      <article className="RecruitmentContents">
        <div className="buttonBar">
          <div className={"navButton selected"}>
            <span>이력서 제출</span>
          </div>
          {/* 클릭 시 사람인 공고 페이지로 이동 */}
          <a href="https://www.saramin.co.kr/zf_user/company-info/view-inner-recruit?csn=STk5STFyMy95dmVPd3pLbHdQYWFGQT09">
            <div className="navButton">
              <span>사람인 공고</span>
            </div>
          </a>
        </div>
        <div className="ContentsArticle">
          <RecruitmentApply />
        </div>
      </article>
    </>
  );
};

export default RecruitmentContents;
