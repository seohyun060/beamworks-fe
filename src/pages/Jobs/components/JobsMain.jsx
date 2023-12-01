import React from "react";

import '../styles/jobs.css'

const JobsMain = () => {
  return (
    <section className="JobsMain">
      <article className="Main">
        <div className="Title">
          <label>
            빔웍스를 통해
            <br />
            자신을 발견해보세요.
          </label>
        </div>
        <div className="Description">
          <label>
            당신의 역량과 우리의 비전이 어우러지는 곳, 빔웍스
            <br />
            도전하고 함께 성장해나아가요.
          </label>
        </div>
      </article>
    </section>
  );
};

export default JobsMain;
