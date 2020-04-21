import React from "react";
import Footer from "../../components/footer";
import "./style.scss";
import logo from "../images/logo_banner.png";

const PracticeInfo = ({
  questions: {
    odDays,
    dailyComps,
    numberOfOd,
    officeManager,
    frontDeskStaff,
    numberOfTechs,
    opticians,
  },
  handleQuestionChange,
}) => {
  const canContinue =
    true ||
    (dailyComps && odDays && numberOfOd && frontDeskStaff && numberOfTechs);

  return (
    <div className="practiceInfo">
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
          <h5>How many days a week are you seeing patients?</h5>
        </div>
        <div className="row col-xs mb-3">
          <input
            className="form-control"
            type="number"
            placeholder="# of OD days"
            name="odDays"
            value={odDays}
            onChange={handleQuestionChange}
          />
        </div>
        <div className="row col-xs mb-1">
          <h5>Average Daily Comps: </h5>
        </div>
        <div className="row col-xs mb-3">
          <input
            className="form-control"
            type="number"
            placeholder="Daily Exam Count"
            name="dailyComps"
            value={dailyComps}
            onChange={handleQuestionChange}
          />
        </div>
        <div className="row col-xs mb-1">
          <h5>Number & Names of OD's: </h5>
        </div>
        <div className="row col-xs mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="# of OD's"
            name="numberOfOd"
            value={numberOfOd}
            onChange={handleQuestionChange}
          />
        </div>
        <div className="row col-xs mb-1">
          <h5>Office Manager:</h5>
        </div>
        <div className="row col-xs mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Who is your Office Manager?"
            name="officeManager"
            value={officeManager}
            onChange={handleQuestionChange}
          ></input>
        </div>
        <div className="row col-xs mb-1">
          <h5>Front Desk Staff: </h5>
        </div>
        <div className="row col-xs mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Front Desk Staff"
            name="frontDeskStaff"
            value={frontDeskStaff}
            onChange={handleQuestionChange}
          />
        </div>
        <div className="row col-xs mb-1">
          <h5>Number of Technicians: </h5>
        </div>
        <div className="row col-xs mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="# of Technicians"
            name="numberOfTechs"
            value={numberOfTechs}
            onChange={handleQuestionChange}
          />
        </div>
        <div className="row col-xs mb-1">
          <h5>Opticans:</h5>
        </div>
        <div className="row col-xs mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="# of opticians"
            name="opticians"
            value={opticians}
            onChange={handleQuestionChange}
          ></input>
        </div>
      </div>
      <Footer
        backUrl="/"
        nextUrl="/lifestylePage"
        nextDisabled={!canContinue}
      />
    </div>
  );
};

export default PracticeInfo;
