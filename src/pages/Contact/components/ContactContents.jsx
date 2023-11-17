import React, { useState } from "react";

import ContactInquire from "./ContactInquire";
import ContactFindUs from "./ContactFindUs";
import ContactGoogleMap from "./ContactGoogleMap";

import MapContainer from "./MapContainer";

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
            <label>문의사항</label>
          </div>
          <div
            className={
              "navButton" + (isButtonSelected === 1 ? " selected" : "")
            }
            onClick={(e) => {
              setIsButtonSelected(1);
            }}
          >
            <label>오시는 길</label>
          </div>
        </div>
        <div className="ContentsArticle">
          {isButtonSelected === 0 && <ContactInquire />}
          {isButtonSelected === 1 && <ContactFindUs />}
        </div>
      </article>
      {isButtonSelected === 1 && <MapContainer />}
    </>
  );
};

export default ContactContents;
