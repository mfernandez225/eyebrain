import React from "react";
import Footer from "../components/footer";
import NumberFormat from "react-number-format";
import Choices from "../components/choices";

const ProfitPage = ({
  questions: { lensConversion, lifestyleIndex, deviceRuns, impactTalk },
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
  const currencyProps = {
    displayType: "text",
    thousandSeparator: true,
    prefix: "$",
  };

  return (
    <div className="profitPage">
      <div className="row col-sm justify-content-center">
        {" "}
        <h1 className="text-success font-weight-bold m-5">
          NEUROLENS POTENTIAL
        </h1>
      </div>
      <div className="container">
        <div className="row mb-3">
          <div className="col-sm-4 font-weight-bold">
            <div className="card text-success bg-white">
              <div className="card-body border border-dark">
                <h3 className="card-title text-center font-weight-bold">
                  WEEKLY
                </h3>
                <p className="card-text font-weight-bolder text-center border border-success rounded p-3">
                  Potential Patients Helped per Week: {weeklyConversions}
                </p>
                <p className="card-text font-weight-bolder text-center border border-success rounded p-3">
                  Weekly Revenue:{" "}
                  <NumberFormat value={weeklyRoi} {...currencyProps} />
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 font-weight-bold">
            <div className="card text-success bg-white">
              <div className="card-body border border-dark">
                <h3 className="card-title text-center font-weight-bold">
                  MONTHLY
                </h3>
                <p className="card-text font-weight-bolder text-center border border-success rounded p-3">
                  {" "}
                  Potential Patients Helped per Month: {monthlyConversions}
                </p>
                <p className="card-text font-weight-bolder text-center border border-success rounded p-3">
                  {" "}
                  Monthly Revenue:{" "}
                  <NumberFormat value={monthlyRoi} {...currencyProps} />
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 font-weight-bold">
            <div className="card text-success bg-white">
              <div className="card-body border border-dark">
                <h3 className="card-title text-center font-weight-bold">
                  YEARLY
                </h3>
                <p className="card-text font-weight-bolder text-center border border-success rounded p-3">
                  {" "}
                  Potential Patients Helped per Year: {yearlyConversions}
                </p>
                <p className="card-text font-weight-bolder text-center border border-success rounded p-3">
                  {" "}
                  Yearly Revenue:{" "}
                  <NumberFormat value={yearlyRoi} {...currencyProps} />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border border-dark bg-light rounded p-5 mb-3">
            <div className="row col-sm justify-content-center m-1">
              <h3 className="text-success font-weight-bold">
                Neurolens Conversion
              </h3>
            </div>
            <Choices
              choices={[
                { label: "20%", value: 0.2 },
                { label: "10%", value: 0.1 },
                { label: "5%", value: 0.05 },
              ]}
              setChoice={(value) => setQuestionValue("lensConversion", value)}
              value={lensConversion}
            />
          </div>
          <div className="border border-dark bg-light p-3 rounded mb-3">
            <div className="row col-sm justify-content-center m-1">
              <h3 className="text-success font-weight-bold">Front Desk</h3>
            </div>
            <h4 className="border border-success text-center font-weight-bolder m-2 p-5">
              Daily Indexes: {whoToIndex}
            </h4>
            <Choices
              choices={[
                { label: "100%", value: 1 },
                { label: "90%", value: 0.9 },
                { label: "75%", value: 0.75 },
              ]}
              setChoice={(value) => setQuestionValue("lifestyleIndex", value)}
              value={lifestyleIndex}
            />
          </div>
          <div className="border border-dark bg-light p-3 rounded mb-3">
            <div className="row col-sm justify-content-center m-1">
              <h3 className="text-success font-weight-bold">Technicians</h3>
            </div>
            <h4 className="border border-success text-center font-weight-bolder m-2 p-5">
              Daily Device Runs: {whoToRun}
            </h4>
            <Choices
              choices={[
                { label: "All Patients", value: 1 },
                { label: "Symptomatic Patients", value: 0.5 },
                { label: "Highly Symptomatic", value: 0.25 },
              ]}
              setChoice={(value) => setQuestionValue("deviceRuns", value)}
              value={deviceRuns}
            />
          </div>
          <div className="border border-dark bg-light p-3 rounded mb-5">
            <div className="row col-sm justify-content-center m-1">
              <h3 className="text-success font-weight-bold">Exam Lane</h3>
            </div>
            <h4 className="border border-success text-center font-weight-bolder m-2 p-5">
              Daily Impactful Conversations: {whoToTalkTo}
            </h4>
            <Choices
              choices={[
                { label: "100%", value: 1 },
                { label: "50%", value: 0.5 },
                { label: "25%", value: 0.25 },
              ]}
              setChoice={(value) => setQuestionValue("impactTalk", value)}
              value={impactTalk}
            />
          </div>
        </div>
      </div>
      <Footer backUrl="/resultPage" nextText="HOME" nextUrl="/" />
    </div>
  );
};

export default ProfitPage;
