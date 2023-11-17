import React from "react";

const ContactFindUs = () => {
  return (
    <div className="ContactFindUs">
      <div className="CompanyName title">
        <span>주식회사 빔웍스 BeamWorks Inc.</span>
      </div>
      <div className="Address">
        <div className="AddressTitle subTitle">
          <span>Business location and address</span>
        </div>
        <div className="AddressInformation description">
          <span>
            107, 3rd Floor, 136-gil, Chilgok Central Road, Buk-gu, Daegu, South
            Korea (Hakjeong-dong)
          </span>
        </div>
      </div>
      <div className="ContactInformation">
        <div className="ContactNumber">
          <div className="ContactNumberTitle subTitle">
            <span>General Contact Number</span>
          </div>
          <div className="ContactNumberInformation description">
            <span>053-322-2107</span>
          </div>
        </div>
        <div className="ContactEmail">
          <div className="ContactEmailTitle subTitle">
            <span>General Contact Email</span>
          </div>
          <div className="ContactEmailInformation description">
            <span>bws@beamworks.co.kr</span>
          </div>
        </div>
        <div className="ContactFax">
          <div className="ContactFaxTitle subTitle">
            <span>Fax</span>
          </div>
          <div className="ContactFaxInformation description">
            <span>053-322-2108</span>
          </div>
        </div>
      </div>
      <div className="Transportation">
        <div className="TransportationTitle title">
          <span>교통편</span>
        </div>
        <div className="TransportationSubway">
          <div className="TransportationSubwayTitle subTitle">
            <span>지하철 이용 시 :</span>
          </div>
          <div className="TransportationSubwayInformation description">
            <span>
              107, 3rd Floor, 136-gil, Chilgok Central Road, Buk-gu, Daegu,
              South Korea (Hakjeong-dong)
            </span>
          </div>
        </div>
        <div className="TransportationCar">
          <div className="TransportationCarTitle subTitle">
            <span>자가용 이용 시 :</span>
          </div>
          <div className="TransportationCarInformation description">
            <span>
              107, 3rd Floor, 136-gil, Chilgok Central Road, Buk-gu, Daegu,
              South Korea (Hakjeong-dong)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFindUs;
