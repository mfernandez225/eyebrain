import React from "react";
import Footer from "../components/footer";
import "./home.scss";
import logo from "./images/logo-banner.png";

const Home = ({
  questions: {
    practiceName,
    investQuestion,
    visionAffiliations,
    managedCare,
    odDays,
    dailyComps,
    numberOfOd,
    officeManager,
    frontDeskStaff,
    numberOfTechs,
    opticians,
    whatMotivates,
  },
  handleQuestionChange,
}) => {
  const canContinue =
    true ||
    (dailyComps &&
      practiceName &&
      whatMotivates &&
      odDays &&
      investQuestion &&
      numberOfOd &&
      frontDeskStaff &&
      numberOfTechs);
  return (
    <div className="home">
      <div className="container border border-dark bg-white rounded mt-5 p-5">
        <div className="row col-sm justify-content-center">
          <img className="mb-2" src={logo} alt="logo" />
        </div>
        <div className="row col-sm justify-content-center">
          <h3 className="text-success font-weight-bold">
            CUSTOMIZED FLOW COMMITMENT
          </h3>
        </div>
        <div className="row col-sm">
          <h5>Practice Name: </h5>
        </div>
        <div className="row col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="Practice Name"
            name="practiceName"
            value={practiceName}
            onChange={handleQuestionChange}
          />
        </div>
        <div className="row col-sm">
          <h5>Vision Affiliations (i.e. Vision Source, Buying Group):</h5>
        </div>
        <div className="row col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="What groups do you participate in?"
            name="visionAffiliations"
            value={visionAffiliations}
            onChange={handleQuestionChange}
          />
        </div>
        <div className="row col-sm">
          <h5>Managed Care (% breakdown of insurances)</h5>
        </div>
        <div className="row col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="How is your managed care in your practice?"
            name="managedCare"
            value={managedCare}
            onChange={handleQuestionChange}
          ></input>
        </div>
        <div className="row col-sm">
          <h5>Why did you invest in this technology for your practice? </h5>
        </div>
        <div className="row col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="Why?"
            name="investQuestion"
            value={investQuestion}
            onChange={handleQuestionChange}
          />
        </div>
        <div className="row col-sm">
          <h5>How many days a week are you seeing patients?</h5>
        </div>
        <div className="row col-sm">
          <input
            className="form-control"
            type="number"
            placeholder="# of OD days"
            name="odDays"
            value={odDays}
            onChange={handleQuestionChange}
          />
        </div>
        <div className="row col-sm">
          <h5>Average Daily Comps : </h5>
        </div>
        <div className="row col-sm">
          <input
            className="form-control"
            type="number"
            placeholder="Daily Exam Count"
            name="dailyComps"
            value={dailyComps}
            onChange={handleQuestionChange}
          />
        </div>
        <div className="row col-sm">
          <h5>Number & Names of OD's : </h5>
        </div>
        <div className="row col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="# of OD's"
            name="numberOfOd"
            value={numberOfOd}
            onChange={handleQuestionChange}
          />
        </div>
        <div className="row col-sm">
          <h5>Office Manager:</h5>
        </div>
        <div className="row col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="Who is your Office Manager?"
            name="officeManager"
            value={officeManager}
            onChange={handleQuestionChange}
          ></input>
        </div>
        <div className="row col-sm">
          <h5>Front Desk Staff : </h5>
        </div>
        <div className="row col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="Front Desk Staff"
            name="frontDeskStaff"
            value={frontDeskStaff}
            onChange={handleQuestionChange}
          />
        </div>
        <div className="row col-sm">
          <h5>Number of Technicians : </h5>
        </div>
        <div className="row col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="# of Technicians"
            name="numberOfTechs"
            value={numberOfTechs}
            onChange={handleQuestionChange}
          />
        </div>
        <div className="row col-sm">
          <h5>Opticans:</h5>
        </div>
        <div className="row col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="# of opticians"
            name="opticians"
            value={opticians}
            onChange={handleQuestionChange}
          ></input>
        </div>
        <div className="row col-sm">
          <h5>What motivates you and your staff? </h5>
        </div>
        <div className="row col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="Patients lives changed? Practice Profitibility? Pay off the device ASAP?"
            name="whatMotivates"
            value={whatMotivates}
            onChange={handleQuestionChange}
          />
        </div>
      </div>
      <Footer nextUrl="/lifestylePage" nextDisabled={!canContinue} />
    </div>
  );
};

export default Home;
