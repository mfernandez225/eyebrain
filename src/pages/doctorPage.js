import React, { useState } from "react";
import Footer from "../components/footer";

const TALK_ALL_CANDIDATES = 1;
const TALK_FIFTY = 0.5;
const TALK_TWENTY_FIVE = 0.25;
const TALK_VALUES = [TALK_ALL_CANDIDATES, TALK_FIFTY, TALK_TWENTY_FIVE];

const DoctorPage = ({
  questions: { timeAllotted, currentFlow, impactTalk, examLaneNotes },
  calculations: { whoToTalkTo },
  handleQuestionChange,
  setQuestionValue,
}) => {
  const impactTalkIsPresent = !!impactTalk;
  const impactTalkIsPresetValue = TALK_VALUES.includes(impactTalk);

  const [showImpactTalk, setShowImpactTalk] = useState(
    impactTalkIsPresent && !impactTalkIsPresetValue
  );
  // const surveyComplete = timeAllotted && currentFlow && examLaneNotes;
  return (
    <div className="doctorPage">
      <div className="row col-sm justify-content-center">
        <h5>EXAM LANE</h5>
      </div>
      <div className="container border border-dark p-5">
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
        <div className="row col-sm justify-content-center m-1">
          <h5>
            What Percentage of Patients will you have Impactful Conversations
            with?
          </h5>
        </div>
        <div className="row col-sm btn-group m-1">
          <button
            className={`btn btn-${
              !showImpactTalk && impactTalk === TALK_ALL_CANDIDATES
                ? "success"
                : "secondary"
            } m-1`}
            onClick={() => setQuestionValue("impactTalk", TALK_ALL_CANDIDATES)}
          >
            100%
          </button>
          <button
            className={`btn btn-${
              !showImpactTalk && impactTalk === TALK_FIFTY
                ? "success"
                : "secondary"
            } m-1`}
            onClick={() => setQuestionValue("impactTalk", TALK_FIFTY)}
          >
            50%
          </button>
          <button
            className={`btn btn-${
              !showImpactTalk && impactTalk === TALK_TWENTY_FIVE
                ? "success"
                : "secondary"
            } m-1`}
            onClick={() => setQuestionValue("impactTalk", TALK_TWENTY_FIVE)}
          >
            25%
          </button>{" "}
          <button
            className={`btn btn-${
              showImpactTalk ? "success" : "secondary"
            } m-1`}
            onClick={() => setShowImpactTalk((curr) => !curr)}
          >
            Custom
          </button>
          {showImpactTalk && (
            <input
              className="form-control"
              type="number"
              placeholder="Custom"
              name="custom"
              value={Math.round(impactTalk * 100)}
              onChange={(e) =>
                setQuestionValue("impactTalk", e.target.value / 100)
              }
            />
          )}
        </div>
        <div className="row col-sm justify-content-center">
          <h5>Total Conversations : {whoToTalkTo || ""}</h5>{" "}
        </div>
      </div>
      <Footer backUrl="/devicePage" nextUrl="/resultPage" />
    </div>
  );
};

export default DoctorPage;
