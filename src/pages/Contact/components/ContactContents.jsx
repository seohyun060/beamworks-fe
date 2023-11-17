import React, { useState } from "react";

import ContactInquire from "./ContactInquire";
import ContactFindUs from "./ContactFindUs";
import ContactGoogleMap from "./ContactGoogleMap";

import images from "src/assets/images";

const ContactContents = () => {
  const [isButtonSelected, setIsButtonSelected] = useState(0);

  return (
    <>
      <article className="ContactContents">
        <div className="buttonBar">
          <div
            className={
              "navButton" + (isButtonSelected === 0 ? " selected" : "")
            }
            onClick={(e) => {
              setIsButtonSelected(0);
            }}
          >
            <span>문의사항</span>
          </div>
          <div
            className={
              "navButton" + (isButtonSelected === 1 ? " selected" : "")
            }
            onClick={(e) => {
              setIsButtonSelected(1);
            }}
          >
            <span>오시는 길</span>
          </div>
        </div>
        <div className="ContentsArticle">
          {isButtonSelected === 0 && <ContactInquire />}
          {isButtonSelected === 1 && <ContactFindUs />}
        </div>
      </article>
      {isButtonSelected === 1 && <ContactGoogleMap />}
    </>
  );
};

export default ContactContents;
