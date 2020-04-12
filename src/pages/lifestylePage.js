import React, { useState } from "react";
import { Link } from "react-router-dom";

const INDEX_ALL_PATIENTS = 1;
const NINETY = 0.9;
const SEVENTY_FIVE = 0.75;
const PRESET_INDEX_VALUES = [INDEX_ALL_PATIENTS, NINETY, SEVENTY_FIVE];

const LifestylePage = ({
  frontDeskNotes,
  setFrontDeskNotes,
  setLifeStyleIndex,
  indexChampion,
  setIndexChampion,
  whoToIndex,
  lifestyleIndex,
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
        <h5>SECTION ONE</h5>
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
            onClick={(e) => setLifeStyleIndex(INDEX_ALL_PATIENTS)}
          >
            100%
          </button>
          <button
            className={`btn btn-${
              !showCustomIndex && lifestyleIndex === NINETY
                ? "success"
                : "secondary"
            } m-1`}
            onClick={(e) => setLifeStyleIndex(NINETY)}
          >
            90%
          </button>
          <button
            className={`btn btn-${
              !showCustomIndex && lifestyleIndex === SEVENTY_FIVE
                ? "success"
                : "secondary"
            } m-1`}
            onClick={(e) => setLifeStyleIndex(SEVENTY_FIVE)}
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
              onChange={(e) => setLifeStyleIndex(e.target.value / 100)}
            />
          )}
        </div>
        <div className="row col-sm justify-content-center">
          <h5>Total Indexes: {whoToIndex || ""}</h5>{" "}
        </div>
        <div className="row col-sm">
          <h5>Who and How will you execute handing these index's out? </h5>
        </div>
        <div className="row col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="Who is the Index Champion?"
            name="indexChampion"
            value={indexChampion}
            onChange={(e) => setIndexChampion(e.target.value)}
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
            name="frontDeskNotes"
            value={frontDeskNotes}
            onChange={(e) => setFrontDeskNotes(e.target.value)}
          />
        </div>
      </div>
      <footer
        className="row justify-content-between fixed-bottom"
        // className={`btn btn-link ${!surveyComplete && "disabled"}`}
        // disabled={!surveyComplete}
      >
        <div className="col-xs-1 btn btn-secondary btn-sm m-5">
          <Link className="text-decoration-none text-light" to="/">
            BACK
          </Link>
        </div>
        <div className="col-xs-1 btn btn-secondary btn-sm m-5">
          <Link className="text-decoration-none text-light" to="/devicePage">
            NEXT
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default LifestylePage;
