import React from "react";

import images from "src/assets/images";

const RecruitmentInternship = () => {
  return (
    <section className="RecruitmentInternship">
      <article className="Internship">
        <div className="Title">
          <label>
            빔웍스는
            <br />
            인턴십도 환영합니다.
          </label>
        </div>
        <div className="Description">
          <label>
            인턴십은 실제 업무 환경에서 업무를 수행하고 조직 내부의 동작 방식을
            이해하는 데 도움을 줍니다. 지원자가 회사의 문화와 업무 프로세스에
            적응하고 미래의 직무에 대한 강한 관심과 자신감을 갖게 해줍니다.
          </label>
        </div>
        <div className="ApplyButton">
          <label>지원 하기</label>
          <img src={images.go_apply} />
        </div>
      </article>
    </section>
  );
};

export default RecruitmentInternship;
