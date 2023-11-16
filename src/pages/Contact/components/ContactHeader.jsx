import React from "react";

import "../styles/contact.css";

const ContactHeader = () => {
  return (
      <article className="ContactHeader">
        <div className="PageName">
          <label>문의하기</label>
        </div>
        <div className="HeaderTitle">
          <label>더 필요한 정보가 있으신가요?</label>
        </div>
        <div className="HeaderDescription">
          <label>
            빔웍스에 대해 궁금한 사항을 아래 문의 폼을 통해 남겨주세요.
            <br />
            담당자가 내부 검토를 거쳐 메일로 회신 드리겠습니다.
          </label>
        </div>
      </article>
  );
};

export default ContactHeader;
