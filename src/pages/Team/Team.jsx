import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  // TeamList 파일의 데이터를 이용해서 팀 업무소개 페이지 제작
  // 한페이지에 업무가 2개씩 들어가기 때문에 묶어주는 작업
  const makeTeamDoing = () => {
    for (let i = 0; i < teamDoingData.length; i = i + 2) {
      if (i + 1 === teamDoingData.length) {
        setTeamDoingSet((prev) => [
          ...prev,
          <TeamDoing key={i} teamDoing1={teamDoingData[i]} />,
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
  };

  useEffect(() => {
    makeTeamDoing();
  }, []);

  return (
    <div className="Team">
      <Link to="/recruitment" state={{team: jobName}}>
        <button className="ApplyButton">지원하기</button>
      </Link>
      <TeamIntro jobName={jobName} />
      <TeamGoal jobName={jobName} />
      {teamDoingSet}
      <TeamOther jobName={jobName} />
      <Footer />
    </div>
  );
};

export default Team;
