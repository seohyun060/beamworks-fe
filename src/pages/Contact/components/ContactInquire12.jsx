import React, { useState } from "react";
import { useFormik, Formik, Field, Form } from "formik";
import emailjs from "@emailjs/browser";

import images from "src/assets/images";

// Inquire Form 부분
const ContactInquire = () => {
  const [selectedCategory, setSelectedCategory] = useState("공통");
  const [isCategorySelectBoxOpen, setIsCategorySelectBoxOpen] = useState(false);
  const categoryArray = [
    "공통",
    "헬로지토헬로",
    "Hello Jito Hello",
    "Jito",
    "Minsu",
    "None",
  ];

  // 추후 메일을 보내기 위한 로딩과정에서 사용, 전역관리?
  const [isLoading, setIsLoading] = useState(false);

  const [isPolicyAgreed, setIsPolicyAgreed] = useState(false);

  // sumbit버튼 동작
  const onSubmitButtonClick = async (data) => {
    setIsLoading(true);
    console.log(data);
    await emailjs
      .sendForm(
        // Outlook Email Serives
        "service_5y4y492",
        //
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
      name: "",
      email: "",
    },
    validate: (values) => {
      const errors = {};

      // 필수 필드를 체크하고 필요에 따라 에러를 설정
      if (values.name == "") {
        errors.name = "이 필드는 필수입니다.";
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
      return errors;
    },
    onSubmit: (values) => {
      // values는 JSON형식의 데이터 {name:"name", email: "email@beamworks.co.kr"}
      // Submit을 하였을 경우의 동작
    },
  });

  return (
    <form
      className="ContactInquire"
      id="inquireForm"
      onSubmit={inquireFormik.handleSubmit}
    >
      {/* 이름 입력 */}
      <div className="Email">
        <div className="LastName">
          <div className="FormSpace">
            <div className="FormName">
              <label>이름</label>
              <img src={images.required_mark} />
              {inquireFormik.touched.name && inquireFormik.errors.name ? (
                <div>
                  <label>{inquireFormik.errors.name}</label>
                </div>
              ) : null}
            </div>
            <div className="InputFormBox">
              <input
                name="name"
                placeholder="이름을 입력해주세요"
                value={inquireFormik.values.name}
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
      {/* 촘 제출하기 버튼 */}
      {true ? (
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
