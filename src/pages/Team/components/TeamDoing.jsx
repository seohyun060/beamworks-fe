import React from "react";

import "../styles/team.css";

const DoingCard = (props) => {
  const { title, description } = props;
  return (
    <div className="DoingCard">
      <div className="CardTitle">
        <span>{title}</span>
      </div>
      <div className="CardDescription">
        <p>{description}</p>
      </div>
    </div>
  );
};

const TeamDoing = (props) => {
  const {teamDoing1, teamDoing2} = props

  return (
    <section className="TeamDoing">
      <article>
        <div className="DoingHeader">
          <div className="HeaderTitle">
            <span>우리 팀은 이러한 업무를 진행하고 있습니다.</span>
          </div>
        </div>
        <div className="DoingDescription">
          <DoingCard
            title={teamDoing1.doingName + " : "}
            description={teamDoing1.doingDescription}
          />
          <DoingCard
            title={teamDoing2 && teamDoing2.doingName + " : "}
            description={teamDoing2 && teamDoing2.doingDescription}
          />
        </div>
      </article>
    </section>
  );
};

export default TeamDoing;
