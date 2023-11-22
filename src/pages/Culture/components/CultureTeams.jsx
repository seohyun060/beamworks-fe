import React from "react";

import images from "src/assets/images";
import "../styles/culture.css";

const CultureTeams = (props) => {
  const { name, projects, information, imageName, progressDotSet, target } =
    props;

  return (
    <div className={target ? "CultureTeams active" : "CultureTeams"}>
      <div className="ProgressBar">
        {progressDotSet.map((data, index) => (
          <img key={index} src={data} />
        ))}
      </div>
      <div className="Teams">
        <div className="TeamInformation">
          <div className="TeamName">
            <label>{name}</label>
          </div>
          <div className="TeamProjects">
            <label>{projects}</label>
          </div>
          <div className="TeamDescription">
            <label>{information}</label>
            <div className="GoDetails">
              <label>자세히 알아보기</label>
              <img src={images.go_details} />
            </div>
          </div>
        </div>
        <div className="TeamImage">
          <img src={images[imageName]} />
        </div>
      </div>
    </div>
  );
};

export default CultureTeams;
