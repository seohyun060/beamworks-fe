import React from "react";

const ContactFindUs = () => {
  return (
    <div className="ContactFindUs">
      <div className="CompanyName title">
        <label>주식회사 빔웍스 BeamWorks Inc.</label>
      </div>
      <div className="Address">
        <div className="AddressTitle subTitle">
          <label>Business location and address</label>
        </div>
        <div className="AddressInformation description">
          <label>
            107, 3rd Floor, 136-gil, Chilgok Central Road, Buk-gu, Daegu, South
            Korea (Hakjeong-dong)
          </label>
        </div>
      </div>
      <div className="ContactInformation">
        <div className="ContactNumber">
          <div className="ContactNumberTitle subTitle">
            <label>General Contact Number</label>
          </div>
          <div className="ContactNumberInformation description">
            <label>053-322-2107</label>
          </div>
        </div>
        <div className="ContactEmail">
          <div className="ContactEmailTitle subTitle">
            <label>General Contact Email</label>
          </div>
          <div className="ContactEmailInformation description">
            <label>bws@beamworks.co.kr</label>
          </div>
        </div>
        <div className="ContactFax">
          <div className="ContactFaxTitle subTitle">
            <label>Fax</label>
          </div>
          <div className="ContactFaxInformation description">
            <label>053-322-2108</label>
          </div>
        </div>
      </div>
      <div className="Transportation">
        <div className="TransportationTitle title">
          <label>교통편</label>
        </div>
        <div className="TransportationSubway">
          <div className="TransportationSubwayTitle subTitle">
            <label>지하철 이용 시 :</label>
          </div>
          <div className="TransportationSubwayInformation description">
            <label>
              107, 3rd Floor, 136-gil, Chilgok Central Road, Buk-gu, Daegu,
              South Korea (Hakjeong-dong)
            </label>
          </div>
        </div>
        <div className="TransportationCar">
          <div className="TransportationCarTitle subTitle">
            <label>자가용 이용 시 :</label>
          </div>
          <div className="TransportationCarInformation description">
            <label>
              107, 3rd Floor, 136-gil, Chilgok Central Road, Buk-gu, Daegu,
              South Korea (Hakjeong-dong)
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFindUs;
