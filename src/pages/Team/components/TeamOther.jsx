import React from "react";

import JobCard from "../..//Jobs/components/JobCard";

const TeamOther = () => {
  return (
    <section className="TeamOther">
      <article>
        <div className="TeamOtherTitle">
          <span>다른 팀도 둘러보기</span>
        </div>
        <div className="TeamOtherContents">
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </article>
    </section>
  );
};

export default TeamOther;
