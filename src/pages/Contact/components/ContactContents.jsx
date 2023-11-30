import React, { useState, useEffect } from "react";

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
      {/* 아래는 Static Map을 사용한 예제, but 아래 예제를 그대로 사용하면 API Key가 노출 */}
      {/* <img
        src={
          "https://maps.googleapis.com/maps/api/staticmap?center=35.955,128.5656&zoom=16&size=1920x1080&key=" +
          process.env.REACT_APP_GOOGLE_MAP_API_KEY
        }
      /> */}
    </>
  );
};

export default ContactContents;
