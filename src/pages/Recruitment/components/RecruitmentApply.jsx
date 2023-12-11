import React, { useState } from "react";
import { useFormik, Formik, Field, Form } from "formik";

import images from "src/assets/images";

const RecruitmentApply = () => {
  const [selectedCategory, setSelectedCategory] = useState("공통");
  const [isCategorySelectBoxOpen, setIsCategorySelectBoxOpen] = useState(false);
  const categoryArray = ["공통", "팀1", "팀2", "팀3", "팀4", "팀5"];

  const [isPolicyAgreed, setIsPolicyAgreed] = useState(false);

  const recruitmentFormik = useFormik({
    initialValues: {
      category: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      resume: null,
      portfolio: null,
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
      if (!values.resume) {
        errors.resume = "이 필드는 필수입니다.";
      }
      return errors;
    },
    onSubmit: (values) => {
      // values는 JSON형식의 데이터
      // onSubmitButtonClick(values);
    },
  });

  return (
    <form
      className="RecriutmentApply"
      id="inquireForm"
      onSubmit={recruitmentFormik.handleSubmit}
    >
      {/* 문의항목 입력, Select Box(Drob down) */}
      <div className="FormSpace">
        <div className="FormName">
          <label>지원 팀</label>
          <img src={images.required_mark} />
          {recruitmentFormik.touched.category &&
          recruitmentFormik.errors.category ? (
            <div>
              <label>{recruitmentFormik.errors.category}</label>
            </div>
          ) : null}
        </div>
        <div
          className="InputCategory"
          onClick={() => setIsCategorySelectBoxOpen((prev) => !prev)}
        >
          <input
            name="category"
            placeholder="공통"
            value={selectedCategory}
            readOnly
            required
          />
          <img
            className={isCategorySelectBoxOpen ? "isOpen" : ""}
            src={images.select_box_open}
          />
        </div>
        {/* <select
          className="InputCategory"
          name="category"
          value={recruitmentFormik.values.category}
          onChange={recruitmentFormik.handleChange}
          onBlur={recruitmentFormik.handleBlur}
        >
          <option value="" label="공통"></option>
          <option value="팀1" label="팀1"></option>
          <option value="팀2" label="팀2"></option>
          <option value="팀3" label="팀3"></option>
        </select> */}
        {/* 문의항목 선택 바 */}
        {isCategorySelectBoxOpen && (
          <div className="CategorySelectBox">
            {categoryArray.map((data, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelectedCategory(data);
                  setIsCategorySelectBoxOpen((prev) => !prev);
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
              {recruitmentFormik.touched.firstName &&
              recruitmentFormik.errors.firstName ? (
                <div>
                  <label>{recruitmentFormik.errors.firstName}</label>
                </div>
              ) : null}
            </div>
            <div className="InputFormBox">
              <input
                name="firstName"
                placeholder="성을 입력해주세요"
                value={recruitmentFormik.values.firstName}
                onChange={recruitmentFormik.handleChange}
                onBlur={recruitmentFormik.handleBlur}
              />
            </div>
          </div>
        </div>
        <div className="LastName">
          <div className="FormSpace">
            <div className="FormName">
              <label>이름</label>
              <img src={images.required_mark} />
              {recruitmentFormik.touched.lastName &&
              recruitmentFormik.errors.lastName ? (
                <div>
                  <label>{recruitmentFormik.errors.lastName}</label>
                </div>
              ) : null}
            </div>
            <div className="InputFormBox">
              <input
                name="lastName"
                placeholder="이름을 입력해주세요"
                value={recruitmentFormik.values.lastName}
                onChange={recruitmentFormik.handleChange}
                onBlur={recruitmentFormik.handleBlur}
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
            {recruitmentFormik.touched.email &&
            recruitmentFormik.errors.email ? (
              <div>
                <label>{recruitmentFormik.errors.email}</label>
              </div>
            ) : null}
          </div>
          <div className="InputFormBox">
            <input
              type="email"
              name="email"
              placeholder="example@beamworks.co.kr"
              value={recruitmentFormik.values.email}
              onChange={recruitmentFormik.handleChange}
              onBlur={recruitmentFormik.handleBlur}
            />
          </div>
        </div>
      </div>
      <div className="PhoneNumber">
        <div className="FormSpace">
          <div className="FormName">
            <label>전화번호</label>
            <img src={images.required_mark} />
            {recruitmentFormik.touched.phoneNumber &&
            recruitmentFormik.errors.phoneNumber ? (
              <div>
                <label>{recruitmentFormik.errors.phoneNumber}</label>
              </div>
            ) : null}
          </div>
          <div className="InputFormBox">
            <input
              name="phoneNumber"
              placeholder="연락이 가능한 전화번호를 입력하세요"
              value={recruitmentFormik.values.phoneNumber}
              onChange={recruitmentFormik.handleChange}
              onBlur={recruitmentFormik.handleBlur}
            />
          </div>
        </div>
      </div>
      {/* 이력서 파일등록 */}
      <div className="Resume">
        <div className="FormSpace">
          <div className="FormName">
            <label>이력서 첨부파일</label>
            <img src={images.required_mark} />
            {recruitmentFormik.touched.resume &&
            recruitmentFormik.errors.resume ? (
              <div>
                <label>{recruitmentFormik.errors.resume}</label>
              </div>
            ) : null}
          </div>
          <div className="InputFormBox">
            <input
              name="resume"
              placeholder="이력서의 양식은 자유롭게 작성하여 첨부해주세요."
              value={recruitmentFormik.values.resume}
              onChange={recruitmentFormik.handleChange}
              onBlur={recruitmentFormik.handleBlur}
            />
          </div>
        </div>
      </div>
      {/* 포트폴리오 파일등록 필수X */}
      <div className="Portfolio">
        <div className="FormSpace">
          <div className="FormName">
            <label>이력서 첨부파일</label>
            <img src={images.required_mark} />
            {recruitmentFormik.touched.portfolio &&
            recruitmentFormik.errors.portfolio ? (
              <div>
                <label>{recruitmentFormik.errors.portfolio}</label>
              </div>
            ) : null}
          </div>
          <div className="InputFormBox">
            <input
              name="portfolio"
              placeholder="포트폴리오 첨부는 선택사항입니다."
              value={recruitmentFormik.values.portfolio}
              onChange={recruitmentFormik.handleChange}
              onBlur={recruitmentFormik.handleBlur}
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
      {/* 촘 제출하기 버튼 */}
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

export default RecruitmentApply;
