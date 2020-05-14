import React from "react";
import Footer from "../../components/footer";
import "./style.scss";
import logo from "../images/logo_banner.png";

const Home = ({
  questions: {
    practiceName,
    investQuestion,
    visionAffiliations,
    managedCare,
    whatMotivates,
  },
  handleQuestionChange,
}) => {
  const canContinue = true || (practiceName && whatMotivates && investQuestion);
  return (
    <div className="home">
      <div className="container border border-dark bg-white rounded mt-5 p-5">
        <div className="row col-xs justify-content-center">
          <img id="logo" className="mb-3" src={logo} alt="logo" />
        </div>
        <div className="row col-xs justify-content-center">
          <h3 className="text-success text-center font-weight-bold">
            CUSTOMIZED FLOW COMMITMENT
          </h3>
        </div>
        <div className="row col-xs mb-1">
          <h5>Practice Name: </h5>
        </div>
        <div className="row col-xs mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Practice Name"
            name="practiceName"
            value={practiceName}
            onChange={handleQuestionChange}
          />
        </div>
        <div className="row col-xs mb-1">
          <h5>Why did you invest in this technology for your practice? </h5>
        </div>
        <div className="row col-xs mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Why?"
            name="investQuestion"
            value={investQuestion}
            onChange={handleQuestionChange}
          />
        </div>
        <div className="row col-xs mb-1">
          <h5>Vision Affiliations (i.e. Vision Source, iDoc, Buying Group)</h5>
        </div>
        <div className="row col-xs mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="What groups do you participate in?"
            name="visionAffiliations"
            value={visionAffiliations}
            onChange={handleQuestionChange}
          />
        </div>
        <div className="row col-xs mb-1">
          <h5>Managed Care (% breakdown of insurances)</h5>
        </div>
        <div className="row col-xs mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="How is managed care broken down in your practice?"
            name="managedCare"
            value={managedCare}
            onChange={handleQuestionChange}
          ></input>
        </div>

        <div className="row col-xs mb-1">
          <h5>What motivates you and your staff? </h5>
        </div>
        <div className="row col-xs mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Patients lives changed?   Practice Profitibility?   Pay off the device ASAP?"
            name="whatMotivates"
            value={whatMotivates}
            onChange={handleQuestionChange}
          />
        </div>
      </div>
      <Footer backUrl="/" nextUrl="/PracticeInfo" nextDisabled={!canContinue} />
    </div>
  );
};

export default Home;
