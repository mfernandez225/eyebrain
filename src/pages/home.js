import React from "react";
import { Link } from "react-router-dom";

const Home = ({
  practiceName,
  setPracticeName,
  investQuestion,
  setInvestQuestion,
  odDays,
  setodDays,
  dailyComps,
  setDailyComps,
  numberOfOd,
  setnumberOfOd,
  frontDeskStaff,
  setFrontDeskStaff,
  numberOfTechs,
  setNumberOfTechs,
  whatMotivates,
  setWhatMotivates,
}) => {
  // const surveyComplete =
  //   dailyComps &&
  //   practiceName &&
  //   whatMotivates &&
  //   odDays &&
  //   investQuestion &&
  //   numberOfOd &&
  //   frontDeskStaff &&
  //   numberOfTechs;
  return (
    <div className="home">
      <div className="row col-sm justify-content-center">
        <h5>CUSTOMIZED FLOW COMMITMENT</h5>
      </div>
      <div className="container border border-dark p-3">
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
            onChange={(e) => setPracticeName(e.target.value)}
          />
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
            onChange={(e) => setInvestQuestion(e.target.value)}
          />
        </div>
        <div className="row col-sm">
          <h5>How many days a week are you seeing patients?</h5>
        </div>
        <div className="row col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="# of OD days"
            name="odDays"
            value={odDays}
            onChange={(e) => setodDays(e.target.value)}
          />
        </div>
        <div className="row col-sm">
          <h5>Average Daily Comps : </h5>
        </div>
        <div className="row col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="Daily Exam Count"
            name="dailyComps"
            value={dailyComps}
            onChange={(e) => setDailyComps(e.target.value)}
          />
        </div>
        <div className="row col-sm">
          <h5>Number of OD's : </h5>
        </div>
        <div className="row col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="# of OD's"
            name="numberOfOd"
            value={numberOfOd}
            onChange={(e) => setnumberOfOd(e.target.value)}
          />
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
            onChange={(e) => setFrontDeskStaff(e.target.value)}
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
            onChange={(e) => setNumberOfTechs(e.target.value)}
          />
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
            onChange={(e) => setWhatMotivates(e.target.value)}
          />
        </div>
      </div>
      <footer className="row justify-content-end fixed-bottom">
        <div
          className="col-xs-1 btn btn-secondary btn-sm m-5"
          // className={`btn btn-link ${!surveyComplete && "disabled"}`}
          // disabled={!surveyComplete}
        >
          <Link className="text-decoration-none text-light" to="/lifestylePage">
            NEXT
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
