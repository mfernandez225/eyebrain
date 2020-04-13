import React, { useState } from "react";
import Footer from "../components/footer";

const TWENTY = 0.2;
const TEN = 0.1;
const FIVE = 0.05;
const CONVERSION_VALUES = [TWENTY, TEN, FIVE];

const ProfitPage = ({
  questions: { lensConversion },
  calculations: {
    weeklyConversions,
    weeklyRoi,
    monthlyConversions,
    monthlyRoi,
    yearlyConversions,
    yearlyRoi,
    whoToIndex,
    whoToRun,
    whoToTalkTo,
  },
  setQuestionValue,
}) => {
  const conversionIsPresent = !!lensConversion;
  const conversionIsPresetValue = CONVERSION_VALUES.includes(lensConversion);

  const [showConversion, setShowConversion] = useState(
    conversionIsPresent && conversionIsPresetValue
  );
  return (
    <div className="profitPage">
      <div className="row col-sm justify-content-center">
        {" "}
        <h5>NEUROLENS POTENTIAL</h5>
      </div>
      <div className="container">
        <div className="border border-dark p-3 mb-5">
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
              onClick={() => setQuestionValue("lensConversion", TWENTY)}
            >
              20%
            </button>
            <button
              className={`btn btn-${
                !showConversion && lensConversion === TEN
                  ? "success"
                  : "secondary"
              } m-1`}
              onClick={() => setQuestionValue("lensConversion", TEN)}
            >
              10%
            </button>
            <button
              className={`btn btn-${
                !showConversion && lensConversion === FIVE
                  ? "success"
                  : "secondary"
              } m-1`}
              onClick={() => setQuestionValue("lensConversion", FIVE)}
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
                onChange={(e) =>
                  setQuestionValue("lensConversion", e.target.value / 100)
                }
              />
            )}
          </div>
          <div className="row col-sm justify-content-center">
            <h5>
              Estimated number of patients treated per week:{" "}
              {weeklyConversions || ""}
            </h5>{" "}
          </div>
        </div>
        <div className="border border-dark p-3 mb-5">
          <h5>Neurolens Potential</h5>
          <p>Potential Patients Helped per Week: {weeklyConversions}</p>
          <p>Weekly ROI: {weeklyRoi}</p>
          <p>Potential Patients Helped per Month: {monthlyConversions}</p>
          <p>Monthly ROI: {monthlyRoi}</p>
          <p>Potential Patients Helped per Year: {yearlyConversions}</p>
          <p>Yearly ROI: {yearlyRoi}</p>
        </div>
        <div className="border border-dark p-3 mb-5">
          <p>Total Indexes: {whoToIndex}</p>
        </div>
        <div className="border border-dark p-3 mb-5">
          <p>Total Device Runs: {whoToRun}</p>
        </div>
        <div className="border border-dark p-3 mb-5">
          <p>Total Impactful Conversations: {whoToTalkTo}</p>
        </div>
      </div>
      <Footer backUrl="/resultPage" nextText="HOME" nextUrl="/" />
    </div>
  );
};

export default ProfitPage;
