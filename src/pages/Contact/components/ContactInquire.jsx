import React, { useState } from "react";

import images from "src/assets/images";

// Inquire Form 부분
const ContactInquire = () => {
  const [selectedCategory, setSelectedCategory] = useState("선택");
  const [isCategorySelectBoxOpen, setIsCategorySelectBoxOpen] = useState(false);
  const categoryArray = [
    "헬로지토헬로",
    "Hello Jito Hello",
    "Jito",
    "Minsu",
    "None",
  ];

  const [isPolicyAgreed, setIsPolicyAgreed] = useState(false);

  const onSubmitButtonClick = (e) => {
    if (isPolicyAgreed === false) {
      return;
    }
    e.preventDefault();

    const inquireForm = new FormData(document.getElementById("inquireForm"));

    console.log(inquireForm);

    let entries = inquireForm.entries();
    for (const pair of entries) {
      console.log(pair[0] + ", " + pair[1]);
    }

    // inquireForm.submit()
  };

  return (
    <form className="ContactInquire" id="inquireForm">
      {/* 문의항목 입력, Select Box */}
      <div className="FormSpace">
        <div className="FormName">
          <label>문의항목</label>
          <img src={images.required_mark} />
        </div>
        <div
          className="InputCategory"
          onClick={() => setIsCategorySelectBoxOpen((prev) => !prev)}
        >
          <label>{selectedCategory}</label>
          <img
            className={isCategorySelectBoxOpen ? "isOpen" : ""}
            src={images.select_box_open}
          />
        </div>
        {/* 문의항목 선택 바 */}
        {isCategorySelectBoxOpen && (
          <div className="CategorySelectBox">
            {categoryArray.map((data) => (
              <li
                onClick={() => {
                  setSelectedCategory(data);
                  setIsCategorySelectBoxOpen((prev) => !prev);
                }}
              >
                <label>{data}</label>
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
            </div>
            <div className="InputFormBox">
              <input
                name="firstName"
                placeholder="성을 입력해주세요"
                required
              />
            </div>
          </div>
        </div>
        <div className="LastName">
          <div className="FormSpace">
            <div className="FormName">
              <label>이름</label>
              <img src={images.required_mark} />
            </div>
            <div className="InputFormBox">
              <input
                name="lastName"
                placeholder="이름을 입력해주세요"
                required
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
          </div>
          <div className="InputFormBox">
            <input
              name="email"
              placeholder="example@beamworks.co.kr"
              required
            />
          </div>
        </div>
      </div>
      <div className="PhoneNumber">
        <div className="FormSpace">
          <div className="FormName">
            <label>전화번호</label>
            <img src={images.required_mark} />
          </div>
          <div className="InputFormBox">
            <input
              name="lastName"
              placeholder="연락이 가능한 전화번호를 입력하세요"
              required
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
          </div>
          <div className="InputFormBox">
            <input
              name="affilation"
              placeholder="회사명을 입력해주세요"
              required
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
          </div>
          <div className="InputFormBox">
            <input
              name="inquireTitle"
              placeholder="제목을 입력해주세요"
              required
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
          </div>
          <div className="InputFormBox text">
            <textarea name="inquireContents" required />
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
      <button type="submit"
        className={"InquireSubmit" + (isPolicyAgreed ? " active" : "")}
        onClick={(e) => {
          onSubmitButtonClick(e);
        }}
      >
        <label>제출하기</label>
      </button>
    </form>
  );
};

export default ContactInquire;
