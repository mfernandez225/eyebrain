import React, { useState } from "react";
import Footer from "../components/footer";

const INDEX_ALL_PATIENTS = 1;
const NINETY = 0.9;
const SEVENTY_FIVE = 0.75;
const PRESET_INDEX_VALUES = [INDEX_ALL_PATIENTS, NINETY, SEVENTY_FIVE];

const LifestylePage = ({
  questions: { frontDeskNotes, indexChampion, lifestyleIndex },
  calculations: { whoToIndex },
  handleQuestionChange,
  setQuestionValue,
}) => {
  const lifestyleIndexIsPresent = !!lifestyleIndex;
  const lifestyleIndexIsPresetValue = PRESET_INDEX_VALUES.includes(
    lifestyleIndex
  );
  const [showCustomIndex, setShowCustomIndex] = useState(
    lifestyleIndexIsPresent && !lifestyleIndexIsPresetValue
  );
  // const surveyComplete = frontDeskNotes && indexChampion;
  return (
    <div className="lifestylePage">
      <div className="row col-sm justify-content-center">
        <h5>FRONT DESK</h5>
      </div>
      <div className="container border border-dark p-5">
        <div className="row col-sm justify-content-center m-1">
          <h5>Percentage of patients you index</h5>
        </div>
        <div className="row col-sm btn-group m-1">
          <button
            className={`btn btn-${
              !showCustomIndex && lifestyleIndex === INDEX_ALL_PATIENTS
                ? "success"
                : "secondary"
            } m-1`}
            onClick={() =>
              setQuestionValue("lifestyleIndex", INDEX_ALL_PATIENTS)
            }
          >
            100%
          </button>
          <button
            className={`btn btn-${
              !showCustomIndex && lifestyleIndex === NINETY
                ? "success"
                : "secondary"
            } m-1`}
            onClick={() => setQuestionValue("lifestyleIndex", NINETY)}
          >
            90%
          </button>
          <button
            className={`btn btn-${
              !showCustomIndex && lifestyleIndex === SEVENTY_FIVE
                ? "success"
                : "secondary"
            } m-1`}
            onClick={() => setQuestionValue("lifestyleIndex", SEVENTY_FIVE)}
          >
            75%
          </button>{" "}
          <button
            className={`btn btn-${
              showCustomIndex ? "success" : "secondary"
            } m-1`}
            onClick={() => setShowCustomIndex((curr) => !curr)}
          >
            Custom
          </button>
          {showCustomIndex && (
            <input
              className="form-control"
              type="number"
              placeholder="Custom"
              name="custom"
              value={Math.round(lifestyleIndex * 100)}
              onChange={(e) =>
                setQuestionValue("lifestyleIndex", e.currentTarget.value / 100)
              }
            />
          )}
        </div>
        <div className="row col-sm justify-content-center">
          <h5>Total Indexes: {whoToIndex || ""}</h5>{" "}
        </div>
        <div className="row col-sm">
          <h5>Who will lead handing these indexes out?</h5>
        </div>
        <div className="row col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="Who is the Index Champion?"
            name="indexChampion"
            value={indexChampion}
            onChange={handleQuestionChange}
          />
        </div>
        <div className="row col-sm">
          <h5>Notes:</h5>
        </div>
        <div className="row col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="Notes"
            name="frontDeskNotes"
            value={frontDeskNotes}
            onChange={handleQuestionChange}
          />
        </div>
      </div>
      <Footer backUrl="/" nextUrl="/devicePage" />
    </div>
  );
};

export default LifestylePage;
