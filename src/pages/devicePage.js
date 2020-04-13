import React, { useState } from "react";
import Footer from "../components/footer";

const DEVICE_ALL_PATIENTS = 1;
const SYMPTOMATIC_PATIENTS = 0.5;
const HIGHLY_SYMPTOMATIC = 0.25;
const DEVICE_PRESET_INDEX_VALUES = [
  DEVICE_ALL_PATIENTS,
  SYMPTOMATIC_PATIENTS,
  HIGHLY_SYMPTOMATIC,
];

const DevicePage = ({
  questions: { deviceChampion, techNotes, deviceRuns },
  calculations: { whoToRun },
  handleQuestionChange,
  setQuestionValue,
}) => {
  const deviceRunsIsPresent = !!deviceRuns;
  const deviceRunsIsPresetValue = DEVICE_PRESET_INDEX_VALUES.includes(
    deviceRuns
  );
  const [showDeviceRuns, setShowDeviceRuns] = useState(
    deviceRunsIsPresent && !deviceRunsIsPresetValue
  );
  // const surveyComplete = deviceChampion && techNotes;
  return (
    <div className="devicePage">
      <div className="row col-sm justify-content-center">
        <h5>TECHNICIANS</h5>
      </div>
      <div className="container border border-dark p-5">
        <div className="row col-sm justify-content-center m-1">
          <h5>What patients do you run on the device?</h5>
        </div>
        <div className="row col-sm btn-group m-1">
          <button
            className={`btn btn-${
              !showDeviceRuns && deviceRuns === DEVICE_ALL_PATIENTS
                ? "success"
                : "secondary"
            } m-1`}
            onClick={() => setQuestionValue("deviceRuns", DEVICE_ALL_PATIENTS)}
          >
            All Patients
          </button>
          <button
            className={`btn btn-${
              !showDeviceRuns && deviceRuns === SYMPTOMATIC_PATIENTS
                ? "success"
                : "secondary"
            } m-1`}
            onClick={() => setQuestionValue("deviceRuns", SYMPTOMATIC_PATIENTS)}
          >
            Symptomatic Patients
          </button>
          <button
            className={`btn btn-${
              !showDeviceRuns && deviceRuns === HIGHLY_SYMPTOMATIC
                ? "success"
                : "secondary"
            } m-1`}
            onClick={() => setQuestionValue("deviceRuns", HIGHLY_SYMPTOMATIC)}
          >
            Highly Symptomatic
          </button>
          <button
            className={`btn btn-${
              showDeviceRuns ? "success" : "secondary"
            } m-1`}
            onClick={() => setShowDeviceRuns((curr) => !curr)}
          >
            Custom
          </button>
          {showDeviceRuns && (
            <input
              className="form-control"
              type="number"
              placeholder="Custom"
              name="custom"
              value={Math.round(deviceRuns * 100)}
              onChange={(e) =>
                setQuestionValue("deviceRuns", e.target.value / 100)
              }
            />
          )}
        </div>
        <div className="row col-sm justify-content-center">
          <h5>Total Device Runs : {whoToRun || ""}</h5>{" "}
        </div>
        <div className="row col-sm">
          <h5>Who will lead running patients? </h5>
        </div>
        <div className="row col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="Who is the Device Champion?"
            name="deviceChampion"
            value={deviceChampion}
            onChange={handleQuestionChange}
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
            name="techNotes"
            value={techNotes}
            onChange={handleQuestionChange}
          />
        </div>
      </div>
      <Footer backUrl="/lifestylePage" nextUrl="/DoctorPage" />
    </div>
  );
};

export default DevicePage;
