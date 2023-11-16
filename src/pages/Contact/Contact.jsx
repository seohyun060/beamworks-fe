import React from "react";

import ContactHeader from "./components/ContactHeader";
import ContactContents from "./components/ContactContents";

import Footer from "src/pages/Footer/Footer";

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
      {/* 뉴스레터 구독 */}
      <Footer />
    </div>
  );
};

export default Contact;
