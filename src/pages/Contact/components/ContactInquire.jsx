import React, { useState } from "react";
import { useFormik, Formik, Field, Form } from "formik";
import emailjs from "@emailjs/browser";

import images from "src/assets/images";

// Inquire Form 부분
const ContactInquire = () => {
  const [selectedCategory, setSelectedCategory] = useState("공통");
  const [isCategorySelectBoxOpen, setIsCategorySelectBoxOpen] = useState(false);
  const categoryArray = ["공통", "문의1", "문의2", "문의3", "문의4"];

  // 추후 메일을 보내기 위한 로딩과정에서 사용, 전역관리?
  const [isLoading, setIsLoading] = useState(false);

  const [isPolicyAgreed, setIsPolicyAgreed] = useState(false);

  // sumbit버튼 동작, 눌렀을 떄 로딩동작 필요
  const onSubmitButtonClick = async (data) => {
    setIsLoading(true);
    console.log(data);
    await emailjs
      .sendForm(
        // Outlook Email Serives
        "service_5y4y492",
        // EmailJS templeate
        "template_9zizcyu",
        document.getElementById("inquireForm"),
        process.env.REACT_APP_EMAILJS_PUBLICK_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("이메일 전송이 완료되었습니다.");
        },
        (error) => {
          console.log(error.text);
          alert("이메일 전송에 실패하였습니다.");
        }
      );
    setIsLoading(false);
    window.location.replace("/contact");
  };

  const inquireFormik = useFormik({
    initialValues: {
      category: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      affiliation: "",
      inquireTitle: "",
      inquireContents: "",
    },
    validate: (values) => {
      const errors = {};

      // 필수 필드를 체크하고 필요에 따라 에러를 설정
      if (values.category == "") {
        errors.category = "이 필드는 필수입니다.";
      }
      if (values.firstName == "") {
        errors.firstName = "이 필드는 필수입니다.";
      }
      if (!values.lastName) {
        errors.lastName = "이 필드는 필수입니다.";
      }
      if (!values.email) {
        errors.email = "이 필드는 필수입니다.";
      }
      // 입력된 이메일이 형식에 맞는지 확인
      else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "유효한 이메일 주소를 입력하세요.";
      }
      if (!values.phoneNumber) {
        errors.phoneNumber = "이 필드는 필수입니다.";
      }
      if (!values.affiliation) {
        errors.affiliation = "이 필드는 필수입니다.";
      }
      if (!values.inquireTitle) {
        errors.inquireTitle = "이 필드는 필수입니다.";
      }
      if (!values.inquireContents) {
        errors.inquireContents = "이 필드는 필수입니다.";
      }
      return errors;
    },
    onSubmit: (values) => {
      // values는 JSON형식의 데이터
      onSubmitButtonClick(values);
    },
  });

  return (
    <form
      className="ContactInquire"
      id="inquireForm"
      onSubmit={inquireFormik.handleSubmit}
    >
      {/* 문의항목 입력, Select Box */}
      <div className="FormSpace">
        <div className="FormName">
          <label>문의항목</label>
          <img src={images.required_mark} />
          {inquireFormik.touched.category && inquireFormik.errors.category ? (
            <div>
              <label>{inquireFormik.errors.category}</label>
            </div>
          ) : null}
        </div>
        <div
          className="InputCategory"
          onClick={() => setIsCategorySelectBoxOpen((prev) => !prev)}
        >
          <input
            name="category"
            placeholder="선택"
            value={selectedCategory}
            // onBlur={inquireFormik.handleBlur}
            readOnly
            required
          />
          <img
            className={isCategorySelectBoxOpen ? "isOpen" : ""}
            src={images.select_box_open}
          />
        </div>
        {/* 문의항목 선택 바 */}
        {isCategorySelectBoxOpen && (
          <div className="CategorySelectBox">
            {categoryArray.map((data, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelectedCategory(data);
                  setIsCategorySelectBoxOpen((prev) => !prev);
                  inquireFormik.values.category = data;
                }}
              >
                <span>{data}</span>
              </li>
            ))}
          </div>
        )}
      </div>
      {/* 이름 입력 */}
      <div className="Name">
        <div className="FirstName">
          <div className="FormSpace">
            <div className="FormName">
              <label>성</label>
              <img src={images.required_mark} />
              {inquireFormik.touched.firstName &&
              inquireFormik.errors.firstName ? (
                <div>
                  <label>{inquireFormik.errors.firstName}</label>
                </div>
              ) : null}
            </div>
            <div className="InputFormBox">
              <input
                name="firstName"
                placeholder="성을 입력해주세요"
                value={inquireFormik.values.firstName}
                onChange={inquireFormik.handleChange}
                onBlur={inquireFormik.handleBlur}
              />
            </div>
          </div>
        </div>
        <div className="LastName">
          <div className="FormSpace">
            <div className="FormName">
              <label>이름</label>
              <img src={images.required_mark} />
              {inquireFormik.touched.lastName &&
              inquireFormik.errors.lastName ? (
                <div>
                  <label>{inquireFormik.errors.lastName}</label>
                </div>
              ) : null}
            </div>
            <div className="InputFormBox">
              <input
                name="lastName"
                placeholder="이름을 입력해주세요"
                value={inquireFormik.values.lastName}
                onChange={inquireFormik.handleChange}
                onBlur={inquireFormik.handleBlur}
              />
            </div>
          </div>
        </div>
      </div>
      {/* 이메일 입력 */}
      <div className="Email">
        <div className="FormSpace">
          <div className="FormName">
            <label>이메일</label>
            <img src={images.required_mark} />
            {inquireFormik.touched.email && inquireFormik.errors.email ? (
              <div>
                <label>{inquireFormik.errors.email}</label>
              </div>
            ) : null}
          </div>
          <div className="InputFormBox">
            <input
              type="email"
              name="email"
              placeholder="example@beamworks.co.kr"
              value={inquireFormik.values.email}
              onChange={inquireFormik.handleChange}
              onBlur={inquireFormik.handleBlur}
            />
          </div>
        </div>
      </div>
      <div className="PhoneNumber">
        <div className="FormSpace">
          <div className="FormName">
            <label>전화번호</label>
            <img src={images.required_mark} />
            {inquireFormik.touched.phoneNumber &&
            inquireFormik.errors.phoneNumber ? (
              <div>
                <label>{inquireFormik.errors.phoneNumber}</label>
              </div>
            ) : null}
          </div>
          <div className="InputFormBox">
            <input
              name="phoneNumber"
              placeholder="연락이 가능한 전화번호를 입력하세요"
              value={inquireFormik.values.phoneNumber}
              onChange={inquireFormik.handleChange}
              onBlur={inquireFormik.handleBlur}
            />
          </div>
        </div>
      </div>
      {/* 회사 입력 */}
      <div className="Affiliation">
        <div className="FormSpace">
          <div className="FormName">
            <label>회사</label>
            <img src={images.required_mark} />
            {inquireFormik.touched.affiliation &&
            inquireFormik.errors.affiliation ? (
              <div>
                <label>{inquireFormik.errors.affiliation}</label>
              </div>
            ) : null}
          </div>
          <div className="InputFormBox">
            <input
              name="affiliation"
              placeholder="회사명을 입력해주세요"
              value={inquireFormik.values.affiliation}
              onChange={inquireFormik.handleChange}
              onBlur={inquireFormik.handleBlur}
            />
          </div>
        </div>
      </div>
      {/* 제목 입력 */}
      <div className="InquireTitle">
        <div className="FormSpace">
          <div className="FormName">
            <label>제목</label>
            <img src={images.required_mark} />
            {inquireFormik.touched.inquireTitle &&
            inquireFormik.errors.inquireTitle ? (
              <div>
                <label>{inquireFormik.errors.inquireTitle}</label>
              </div>
            ) : null}
          </div>
          <div className="InputFormBox">
            <input
              name="inquireTitle"
              placeholder="제목을 입력해주세요"
              value={inquireFormik.values.inquireTitle}
              onChange={inquireFormik.handleChange}
              onBlur={inquireFormik.handleBlur}
            />
          </div>
        </div>
      </div>
      {/* 문의 내용 입력 */}
      <div className="InquireContents">
        <div className="FormSpace">
          <div className="FormName">
            <label>문의 내용</label>
            <img src={images.required_mark} />
            {inquireFormik.touched.inquireContents &&
            inquireFormik.errors.inquireContents ? (
              <div>
                <label>{inquireFormik.errors.inquireContents}</label>
              </div>
            ) : null}
          </div>
          <div className="InputFormBox text">
            <textarea
              name="inquireContents"
              value={inquireFormik.values.inquireContents}
              onChange={inquireFormik.handleChange}
              onBlur={inquireFormik.handleBlur}
            />
          </div>
        </div>
      </div>
      {/* 개인정보 수집 동의 */}
      <div className="PrivacyPoilcyAgree">
        <div className="Test">
          <input
            type="checkbox"
            checked={isPolicyAgreed}
            onChange={() => setIsPolicyAgreed((prev) => !prev)}
          ></input>
        </div>
        <div className="PrivacyPoilcyDescription">
          <label style={{ color: "#346EC5" }}>(필수) </label>
          <label>
            빔웍스는 제품 문의 결과 회신 및 서비스 제공을 위하여 개인정보를 수집
            및 이용합니다.
            <br />
            수집과 관련된 내용을 자세히 읽으신 후 동의의 여부를 결정해 주세요.
          </label>
        </div>
      </div>
      {/* 폼 제출하기 버튼 */}
      {isPolicyAgreed ? (
        <button
          type="submit"
          className="InquireSubmit isActive"
          // onClick={(e) => {
          //   onSubmitButtonClick(e);
          // }}
        >
          <span>제출하기</span>
        </button>
      ) : (
        <button className="InquireSubmit" disabled>
          <span>제출하기</span>
        </button>
      )}
    </form>
  );
};

export default ContactInquire;
