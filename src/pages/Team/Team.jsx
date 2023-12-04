import React from "react";
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
  const params = useParams();
  console.log(window.location.pathname);
  return (
    <div className="Team">
      <button className="ApplyButton">지원하기</button>
      <TeamIntro />
      <TeamGoal />
      <TeamDoing />
      <TeamOther />
      <Footer />
    </div>
  );
};

export default Team;
