import React from "react";
import images from "src/assets/images";

const OrcaMain = () => {
  return (
    <section className="OrcaMain">
      <a href="https://dga4tyl72gqaj.cloudfront.net/">
        <button className="VisitWebsite">웹사이트 방문</button>
      </a>
      <div className="OrcaMainDescription">
        <img src={images.ORCA_logo} className="header" />
        <div className="body">/ˈɔːr.kə/ Optimized Research in Clinical AI</div>
      </div>
    </section>
  );
};

export default OrcaMain;
