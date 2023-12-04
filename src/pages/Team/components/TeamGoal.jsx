import React from "react";

import images from "src/assets/images";

import TeamInfo from "../TeamList.json";

const TeamGoal = (props) => {
  const { jobName } = props;
  const jobData = TeamInfo.data[jobName];

  return (
    <section className="TeamGoal">
      <div className="GoalDescription">
        <div className="Goal">
          <p>{jobData.teamGoal}</p>
        </div>
      </div>
      <div className="ImageSection">
        <img src={images[jobData.teamGoalImage]} />
      </div>
    </section>
  );
};

export default TeamGoal;
