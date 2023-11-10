import React from "react";

import images from "src/assets/images";

const IntroduceAbout = () => {
  return (
    <section className="IntroduceAbout">
      <article>
        <div className="About">
          <div className="Title">
            <label>빔웍스 인사말</label>
          </div>
          <div className="BoardMember">
            <label>대표 김원화, 김재일</label>
          </div>
          <div className="Greeting">
            <label>
              "우리의 열정은 미래의 의료 분야를 형성하고 인간의 건강을 더 나은
              방향으로 이끌기 위한 역사적인 여정의 시작입니다. 우리의 의료
              소프트웨어는 최첨단 기술과 의학의 깊은 이해로 이루어진 결과물로,
              미래의 의료 혁신을 위한 초석입니다.
              <br />
              <br />
              우리는 미래의 의료 환경을 예측하고 그것을 현실로 만들기 위해
              끊임없이 연구하고 노력합니다. 환자와 의료진을 연결하며, 의료
              서비스의 질을 향상시키며, 건강을 관리하는 데 필요한 도구를
              제공합니다.
              <br />
              <br />
              우리의 이웃과 혁신을 향한 열정을 함께 나누고, 미래를 만드는 과정에
              함께 참여해 주셔서 감사합니다. 우리는 미래의 의료를 이끌어 나가는
              리더로서 계속해서 노력할 것을 약속드립니다."
            </label>
            <div className="Signature">
              <img src={images.signature1} />
              <img src={images.signature2} />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default IntroduceAbout;
