import React from "react";

import "../styles/team.css";
import images from "src/assets/images";

import TeamInfo from "../TeamList.json";

const TeamIntro = (props) => {
  const { jobName } = props;
  const jobData = TeamInfo.data[jobName]

  return (
    <section className="TeamIntro">
      <div className="Description">
        <div className="Title">
          <span>{jobData.teamNameEng}</span>
        </div>
        <div className="Slogun">
          <p>{jobData.teamSlogun}</p>
        </div>
      </div>
      <div className="ImageSection">
        <img src={images[jobData.teamSlogunImage]} />
      </div>
    </section>
  );
};

export default TeamIntro;
