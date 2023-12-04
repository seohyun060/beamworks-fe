import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import TeamIntro from "./components/TeamIntro";
import TeamGoal from "./components/TeamGoal";
import TeamDoing from "./components/TeamDoing";
import TeamOther from "./components/TeamOther";
import Footer from "src/pages/Footer/Footer";

import "./styles/team.css";
import TeamList from "./TeamList.json";

const Team = (props) => {
  const { jobName } = props;
  const teamDoingData = TeamList.data[jobName].teamDoing;
  const [teamDoingSet, setTeamDoingSet] = useState([]);

  useEffect(() => {
    for (let i = 0; i < teamDoingData.length; i = i + 2) {
      if (i + 1 === teamDoingData.length) {
        setTeamDoingSet((prev) => [
          ...prev,
          <TeamDoing
            key={i}
            teamDoing1={teamDoingData[i]}
          />,
        ]);
      } else
        setTeamDoingSet((prev) => [
          ...prev,
          <TeamDoing
          key={i}
            teamDoing1={teamDoingData[i]}
            teamDoing2={teamDoingData[i + 1]}
          />,
        ]);
      {
      }
    }
  }, []);

  return (
    <div className="Team">
      <button className="ApplyButton">지원하기</button>
      <TeamIntro jobName={jobName} />
      <TeamGoal jobName={jobName} />
      {teamDoingSet}
      <TeamOther jobName={jobName} />
      <Footer />
    </div>
  );
};

export default Team;
