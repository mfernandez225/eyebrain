import React from "react";
import Footer from "../components/footer";

const Home = ({
  questions: {
    practiceName,
    investQuestion,
    odDays,
    dailyComps,
    numberOfOd,
    frontDeskStaff,
    numberOfTechs,
    whatMotivates,
  },
  handleQuestionChange,
}) => {
  // const canContinue =
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
            onChange={handleQuestionChange}
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
          <h5>Number of OD's : </h5>
        </div>
        <div className="row col-sm">
          <input
            className="form-control"
            type="number"
            placeholder="# of OD's"
            name="numberOfOd"
            value={numberOfOd}
            onChange={handleQuestionChange}
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
      <Footer nextUrl="/lifestylePage" />
    </div>
  );
};

export default Home;
