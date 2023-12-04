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

const TeamDoing = () => {
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
            title="Communication Design : "
            description="Communication Design은 정보를 명확하게 전달하고 사용자 경험을 향상시키는 디자인의 한 분야입니다. 시각적인 효과와 문화적 컨텍스트를 고려하여 디자인 요소를 조화롭게 결합하여 메시지를 전달합니다. 로고, 포스터, 웹사이트, 앱 인터페이스 등 다양한 매체를 활용하여 브랜드의 아이덴티티를 강화하고 고객과의 소통을 향상시킵니다. Communication Design은 미적 감각과 전략적 사고를 결합하여 효과적이고 의미 있는 디자인을 창조합니다."
          />
          <DoingCard
            title="UI/UX Design :"
            description="Communication Design은 정보를 명확하게 전달하고 사용자 경험을 향상시키는 디자인의 한 분야입니다. 시각적인 효과와 문화적 컨텍스트를 고려하여 디자인 요소를 조화롭게 결합하여 메시지를 전달합니다. 로고, 포스터, 웹사이트, 앱 인터페이스 등 다양한 매체를 활용하여 브랜드의 아이덴티티를 강화하고 고객과의 소통을 향상시킵니다. Communication Design은 미적 감각과 전략적 사고를 결합하여 효과적이고 의미 있는 디자인을 창조합니다."
          />
        </div>
      </article>
    </section>
  );
};

export default TeamDoing;
