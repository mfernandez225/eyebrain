import React from "react";
import Footer from "../../components/footer";
import logo from "../images/logo_banner.png";

const resultPage = ({
  questions: {
    investQuestion,
    whatMotivates,
    frontDeskNotes,
    officeManager,
    indexChampion,
    techNotes,
    deviceChampion,
    examLaneNotes,
    currentFlow,
  },
  calculations: { whoToIndex, whoToRun, whoToTalkTo },
}) => {
  return (
    <div className="resultsPage">
      <div className="row col-sm justify-content-center">
        <img className="mb-2 mt-5" src={logo} alt="logo" />
      </div>
      <div className="row col-sm justify-content-center">
        {" "}
        <h3 className="text-success font-weight-bold mb-5">FLOW SUMMARY</h3>
      </div>
      <div className="container">
        <div className="row bg-white border border-dark rounded justify-content-between">
          <div className="col-sm-6 text-success font-weight-bold rounded p-3">
            <div>
              <h3 className="text-center text-dark font-weight-bold">
                Projected Daily Totals
              </h3>
              <div className="text-center border border-success rounded p-2">
                <p className="text-dark">
                  Lifestyle Index's:{" "}
                  <h5 className="font-weight-bolder text-success">
                    {whoToIndex}
                  </h5>
                </p>
                <p className="text-dark">
                  Device Runs:{" "}
                  <h5 className="font-weight-bolder text-success">
                    {whoToRun}
                  </h5>
                </p>
                <p className="text-dark">
                  Patient Conversations:{" "}
                  <h5 className="font-weight-bolder text-success">
                    {whoToTalkTo}
                  </h5>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 text-success font-weight-bold rounded p-3">
            <div>
              {" "}
              <h3 className="text-center text-dark font-weight-bold">
                Neurolens Champions
              </h3>
              <div className="text-center border border-success rounded p-2">
                <p className="text-dark">
                  Office Manager:{" "}
                  <h5 className="font-weight-bolder text-success">
                    {officeManager}
                  </h5>
                </p>
                <p className="text-dark">
                  Front Desk:{" "}
                  <h5 className="font-weight-bolder text-success">
                    {indexChampion}
                  </h5>
                </p>
                <p className="text-dark">
                  Technician:{" "}
                  <h5 className="font-weight-bolder text-success">
                    {deviceChampion}
                  </h5>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          {" "}
          <div className="col-sm-12 bg-white text-dark font-weight-bold border border-dark rounded p-3 mb-5">
            <h3 className="mb-3 text-center font-weight-bold">
              Practice Insights
            </h3>
            <p className="text-secondary">
              Why you invested in Neurolenses:{" "}
              <p className="text-dark font-weight-bolder mt-2">
                {investQuestion}
              </p>
            </p>
            <p className="text-secondary">
              What motivates your practice:{" "}
              <p className="text-dark font-weight-bolder mt-2">
                {whatMotivates}
              </p>
            </p>
          </div>
        </div>

        <div className="row">
          {" "}
          <div className="col-sm-12 bg-white text-dark font-weight-bold border border-dark rounded p-3 mb-5">
            <h3 className="mb-3 text-center font-weight-bold">Notes</h3>
            <p className="text-secondary">
              Front Desk Notes:{" "}
              <p className="text-dark font-weight-bolder mt-2">
                {frontDeskNotes}
              </p>
            </p>
            <p className="text-secondary">
              Technician Notes:{" "}
              <p className="text-dark font-weight-bolder mt-2">{techNotes}</p>
            </p>
            <p className="text-secondary">
              Exam Lane Notes:{" "}
              <p className="text-dark font-weight-bolder mt-2">
                {examLaneNotes}
              </p>
            </p>
            <p className="text-secondary">
              OD to Optical Flow:{" "}
              <p className="text-dark font-weight-bolder mt-2">{currentFlow}</p>
            </p>
          </div>
        </div>
      </div>
      <Footer backUrl="/doctorPage" nextUrl="/profitPage" />
    </div>
  );
};

export default resultPage;
