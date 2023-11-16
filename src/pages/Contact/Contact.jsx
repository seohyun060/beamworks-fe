import React from "react";

import ContactHeader from "./components/ContactHeader";
import ContactContents from "./components/ContactContents";
import ContactFooter from "./components/ContactFooter";

import images from "src/assets/images";


// Contact Us 페이지
const Contact = () => {
  return (
    <div className="Contact">
      <section>
        {/* 문의하기 설명 */}
        <ContactHeader />
        {/* 내용 */}
        <ContactContents />
      </section>
      {/* 하단 기업정보 */}
      <ContactFooter />
    </div>
  );
};

export default Contact;
