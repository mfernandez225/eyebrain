import React from "react";
import Footer from "../../components/footer";
import NumberFormat from "react-number-format";
import Choices from "../../components/choices";
import logo from "../images/logo_banner.png";
import "./style.scss";

const ProfitCalculator = ({
  questions: {
    odDays,
    dailyComps,
    lensConversion,
    lifestyleIndex,
    deviceRuns,
    impactTalk,
  },
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
  handleQuestionChange,

  setQuestionValue,
}) => {
  const currencyProps = {
    displayType: "text",
    thousandSeparator: true,
    prefix: "$",
  };

  return (
    <div className="profitPage">
      <div className="row col-xs justify-content-center">
        <img id="logo" className="mb-3 mt-5" src={logo} alt="logo" />
      </div>
      <div className="row col-xs justify-content-center">
        {" "}
        <h3 className="text-success text-center font-weight-bold mb-5">
          IMPACT ON YOUR PRACTICE
        </h3>
      </div>
      <div className="container">
        <div className="border border-dark bg-light rounded p-5 mb-2">
          <div className="row text-center mb-1">
            <div className="col">
              <h5 id="calcQuestion">
                How many days a week are you seeing patients?
              </h5>
              <input
                className="form-control"
                type="number"
                placeholder="# of OD days"
                name="odDays"
                value={odDays}
                onChange={handleQuestionChange}
              />
            </div>
            <div className="col">
              <h5 id="calcQuestion">Average Daily Comps: </h5>
              <input
                className="form-control"
                type="number"
                placeholder="Daily Exam Count"
                name="dailyComps"
                value={dailyComps}
                onChange={handleQuestionChange}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="border border-dark bg-light p-3 rounded mb-2">
            <div className="row col-sm justify-content-between">
              <h5 className="text-success font-weight-bolder">
                Daily Indexes: {whoToIndex}
              </h5>
            </div>
            <>
              <h4 className="border border-success text-center font-weight-bolder m-2 p-5">
                Percentage of patients you index
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
            </>
          </div>
          <div className="border border-dark bg-light p-3 rounded mb-2">
            <div className="row col-sm justify-content-between">
              <h5 className="text-success font-weight-bolder">
                {" "}
                Daily Device Runs: {whoToRun}
              </h5>
            </div>
            <>
              <h4 className="border border-success text-center font-weight-bolder m-2 p-5">
                What patients do you run on the device?
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
              <div>
                <h5 className="text-muted text-center mt-3">
                  {" "}
                  Time Invested: {whoToRun * 4 || ""} minutes
                </h5>
              </div>
            </>
          </div>
          <div className="border border-dark bg-light p-3 rounded mb-2">
            <div className="row col-sm justify-content-between">
              <h5 className="text-success font-weight-bolder">
                Daily Impactful Conversations: {whoToTalkTo}
              </h5>
            </div>

            <>
              <h4 className="border border-success text-center font-weight-bolder m-2 p-5">
                What Percentage of Patients will you have Impactful
                Conversations with?{" "}
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
              <div>
                <h5 className="text-muted text-center mt-3">
                  {" "}
                  Time Invested: {whoToTalkTo * 5 || ""} minutes
                </h5>
              </div>
            </>
          </div>
        </div>
        <div className="border border-dark bg-light rounded p-5 mb-3">
          <div className="row col-sm justify-content-center m-1">
            <h3 className="text-success text-center font-weight-bold">
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
        <div className="row mt-3">
          <div className="col-sm-3 mb-3 font-weight-bold">
            <div className="card text-success bg-white">
              <div className="card-body border border-dark">
                <h3 className="card-title text-dark text-center font-weight-bold">
                  DEVICE
                </h3>
                <div className="card-text font-weight-bolder text-center border border-success rounded mb-3 p-3">
                  Daily Tests: <h1>{whoToRun}</h1>
                </div>
                <div className="card-text font-weight-bolder text-center border border-success rounded p-3">
                  Profit per Test:
                  <h1>
                    <NumberFormat
                      value={Math.round(weeklyRoi / odDays / whoToRun) || 0}
                      {...currencyProps}
                    />
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 mb-3 font-weight-bold">
            <div className="card text-success bg-white">
              <div className="card-body border border-dark">
                <h3 className="card-title text-dark text-center font-weight-bold">
                  WEEKLY
                </h3>
                <div className="card-text font-weight-bolder text-center border border-success rounded mb-3 p-3">
                  Patients Helped: <h1>{weeklyConversions}</h1>
                </div>
                <div className="card-text font-weight-bolder text-center border border-success rounded p-3">
                  Weekly Profit:
                  <h1>
                    <NumberFormat value={weeklyRoi} {...currencyProps} />
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 mb-3 font-weight-bold">
            <div className="card text-success bg-white">
              <div className="card-body border border-dark">
                <h3 className="card-title text-dark text-center font-weight-bold">
                  MONTHLY
                </h3>
                <div className="card-text font-weight-bolder text-center border border-success mb-3 rounded p-3">
                  {" "}
                  Patients Helped: <h1>{monthlyConversions}</h1>
                </div>
                <div className="card-text font-weight-bolder text-center border border-success rounded p-3">
                  {" "}
                  Monthly Profit:
                  <h1>
                    {" "}
                    <NumberFormat value={monthlyRoi} {...currencyProps} />
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 font-weight-bold">
            <div className="card text-success bg-white">
              <div className="card-body border border-dark">
                <h3 className="card-title text-dark text-center font-weight-bold">
                  YEARLY
                </h3>
                <div className="card-text font-weight-bolder text-center border border-success mb-3 rounded p-3">
                  {" "}
                  Patients Helped: <h1>{yearlyConversions}</h1>
                </div>
                <div className="card-text font-weight-bolder text-center border border-success rounded p-3">
                  {" "}
                  Yearly Profit:
                  <h1>
                    {" "}
                    <NumberFormat value={yearlyRoi} {...currencyProps} />
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer nextText="HOME" nextUrl="/" />
    </div>
  );
};

export default ProfitCalculator;
