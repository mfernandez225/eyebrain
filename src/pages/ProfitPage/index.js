import React from "react";
import Footer from "../../components/footer";
import NumberFormat from "react-number-format";
import Choices from "../../components/choices";
import logo from "../images/logo_banner.png";
import { Link } from "react-router-dom";

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
        <div className="row mb-3">
          <div className="col-sm-4 mb-3 font-weight-bold">
            <div className="card text-success bg-white">
              <div className="card-body border border-dark">
                <h3 className="card-title text-dark text-center font-weight-bold">
                  WEEKLY
                </h3>
                <div className="card-text font-weight-bolder text-center border border-success rounded mb-3 p-3">
                  Patients Helped: <h1>{weeklyConversions}</h1>
                </div>
                <div className="card-text font-weight-bolder text-center border border-success rounded p-3">
                  Weekly Revenue:
                  <h1>
                    <NumberFormat value={weeklyRoi} {...currencyProps} />
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-3 font-weight-bold">
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
                  Monthly Revenue:
                  <h1>
                    {" "}
                    <NumberFormat value={monthlyRoi} {...currencyProps} />
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 font-weight-bold">
            <div className="card text-success bg-white">
              <div className="card-body border border-dark">
                <h3 className="card-title text-dark text-center font-weight-bold">
                  YEARLY
                </h3>
                <div className="card-text font-weight-bolder text-center border border-success mb-3 rounded p-3">
                  {" "}
                  Patients Helped per Year: <h1>{yearlyConversions}</h1>
                </div>
                <div className="card-text font-weight-bolder text-center border border-success rounded p-3">
                  {" "}
                  Yearly Revenue:
                  <h1>
                    {" "}
                    <NumberFormat value={yearlyRoi} {...currencyProps} />
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
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
          <div className="border border-dark bg-light p-3 rounded mb-3">
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
      <Footer backUrl="/resultPage" nextText="HOME" nextUrl="/">
        <div className="col-xs-1 btn btn-secondary btn-lg m-5 btn-footer">
          <Link className="text-decoration-none text-light" to="/Result.pdf">
            PDF
          </Link>
        </div>
      </Footer>
    </div>
  );
};

export default ProfitPage;
