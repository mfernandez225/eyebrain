import React, { useState } from "react";
import { Link } from "react-router-dom";

const TWENTY = 0.2;
const TEN = 0.1;
const FIVE = 0.05;
const CONVERSION_VALUES = [TWENTY, TEN, FIVE];

const DoctorPage = ({
  timeAllotted,
  setTimeAllotted,
  currentFlow,
  setCurrentFlow,
  lensConversion,
  setLensConversion,
  examLaneNotes,
  setExamLaneNotes,
  patientsHelped,
}) => {
  const conversionIsPresent = !!lensConversion;
  const conversionIsPresetValue = CONVERSION_VALUES.includes(lensConversion);

  const [showConversion, setShowConversion] = useState(
    conversionIsPresent && conversionIsPresetValue
  );
  // const surveyComplete = timeAllotted && currentFlow && examLaneNotes;
  return (
    <div className="doctorPage">
      <div className="row col-sm justify-content-center">
        <h5>EXAM LANE</h5>
      </div>
      <div className="container border border-dark p-5">
        <div className="row col-sm">
          <h5>Time Alloted for Eye Exam : </h5>
        </div>
        <div className="row col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="Minutes"
            name="timeAllotted"
            value={timeAllotted}
            onChange={(e) => setTimeAllotted(e.target.value)}
          />
        </div>
        <div className="row col-sm">
          <h5>Current Flow to Optical : </h5>
        </div>
        <div className="row col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="Current Flow"
            name="currentFlow"
            value={currentFlow}
            onChange={(e) => setCurrentFlow(e.target.value)}
          />
        </div>
        <div className="row col-sm">
          <h5>Notes : </h5>
        </div>
        <div className="row col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="Notes"
            name="examLaneNotes"
            value={examLaneNotes}
            onChange={(e) => setExamLaneNotes(e.target.value)}
          />
        </div>
        <div className="row col-sm justify-content-center m-1">
          <h5>Neurolens Conversion</h5>
        </div>
        <div className="row col-sm btn-group m-1">
          <button
            className={`btn btn-${
              !showConversion && lensConversion === TWENTY
                ? "success"
                : "secondary"
            } m-1`}
            onClick={(e) => setLensConversion(TWENTY)}
          >
            20%
          </button>
          <button
            className={`btn btn-${
              !showConversion && lensConversion === TEN
                ? "success"
                : "secondary"
            } m-1`}
            onClick={(e) => setLensConversion(TEN)}
          >
            10%
          </button>
          <button
            className={`btn btn-${
              !showConversion && lensConversion === FIVE
                ? "success"
                : "secondary"
            } m-1`}
            onClick={(e) => setLensConversion(FIVE)}
          >
            5%
          </button>{" "}
          <button
            className={`btn btn-${
              showConversion ? "success" : "secondary"
            } m-1`}
            onClick={() => setShowConversion((curr) => !curr)}
          >
            Custom
          </button>
          {showConversion && (
            <input
              className="form-control"
              type="number"
              placeholder="Custom"
              name="custom"
              value={Math.round(lensConversion * 100)}
              onChange={(e) => setLensConversion(e.target.value / 100)}
            />
          )}
        </div>
        <div className="row col-sm justify-content-center">
          <h5>
            Estimated number of patients treated per week:{patientsHelped || ""}
          </h5>{" "}
        </div>
      </div>
      <footer className="row justify-content-between fixed-bottom">
        {/* // className={`btn btn-link ${!surveyComplete && "disabled"}`}
        // disabled={!surveyComplete}> */}
        <div className="col-xs-1 btn btn-secondary btn-sm m-5">
          <Link className="text-decoration-none text-light" to="/devicePage">
            BACK
          </Link>
        </div>
        <div className="col-xs-1 btn btn-secondary btn-sm m-5">
          <Link className="text-decoration-none text-light" to="/resultPage">
            NEXT
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default DoctorPage;
