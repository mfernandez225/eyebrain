import React from "react";
import Footer from "../../components/footer";
import Choices from "../../components/choices";
import logo from "../images/logo_banner.png";

const DoctorPage = ({
  questions: { timeAllotted, currentFlow, impactTalk, examLaneNotes },
  calculations: { whoToTalkTo },
  handleQuestionChange,
  setQuestionValue,
}) => {
  // const surveyComplete = timeAllotted && currentFlow && examLaneNotes;
  return (
    <div className="doctorPage">
      <div className="container border border-dark bg-light mt-5 p-5">
        <div className="row col-xs justify-content-center">
          <img id="logo" className="mb-3" src={logo} alt="logo" />
        </div>
        <div className="row col-xs justify-content-center">
          <h3 className="text-success font-weight-bold m-2">EXAM LANE</h3>
        </div>
        <div className="row col-xs justify-content-center m-1">
          <h5>
            What Percentage of Patients will you have Impactful Conversations
            with?
          </h5>
        </div>
        <Choices
          choices={[
            { label: "100%", value: 1 },
            { label: "50%", value: 0.5 },
            { label: "25%", value: 0.25 },
          ]}
          setChoice={(value) => setQuestionValue("impactTalk", value)}
          value={impactTalk}
        />
        <div className="row col-sm justify-content-center">
          <h3 className="border border-success text-success font-weight-bolder m-2 p-5">
            Daily Conversations : {whoToTalkTo || ""}
          </h3>{" "}
        </div>
        <div className="row col-sm">
          <h5>Time Alloted for Eye Exam: </h5>
        </div>
        <div className="row col-sm">
          <input
            className="form-control"
            type="number"
            placeholder="Minutes"
            name="timeAllotted"
            value={timeAllotted}
            onChange={handleQuestionChange}
          />
        </div>
        <div className="row col-sm">
          <h5>Current Flow to Optical: </h5>
        </div>
        <div className="row col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="Current Flow"
            name="currentFlow"
            value={currentFlow}
            onChange={handleQuestionChange}
          />
        </div>
        <div className="row col-sm">
          <h5>Notes: </h5>
        </div>
        <div className="row col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="Notes"
            name="examLaneNotes"
            value={examLaneNotes}
            onChange={handleQuestionChange}
          />
        </div>
      </div>
      <Footer backUrl="/devicePage" nextUrl="/resultPage" />
    </div>
  );
};

export default DoctorPage;
