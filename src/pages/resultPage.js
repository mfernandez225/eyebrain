import React from "react";
import Footer from "../components/footer";

const resultPage = ({
  questions: {
    investQuestion,
    whatMotivates,
    frontDeskNotes,
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
        {" "}
        <h1 className="text-success font-weight-bold m-5">FLOW SUMMARY</h1>
      </div>
      <div className="container">
        <div className="row bg-white border border-dark rounded justify-content-between">
          <div className="col-sm-6 text-success font-weight-bold rounded p-3">
            <div>
              <h3 className="text-center text-dark mb-3 font-weight-bold">
                Projected Daily Totals
              </h3>
              <div className="text-center border border-success rounded p-3">
                <p>Daily Lifestyle Index's: {whoToIndex}</p>
                <p>Daily Device Runs: {whoToRun}</p>
                <p>Daily Patient Conversations: {whoToTalkTo}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 text-success font-weight-bold rounded p-3">
            <div>
              {" "}
              <h3 className="text-center text-dark mb-3 font-weight-bold">
                Neurolens Champions
              </h3>
              <div className="text-center border border-success rounded p-3">
                <p>Front Desk Champion: {indexChampion}</p>
                <p>Device Champion: {deviceChampion}</p>
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
            <p>Why you invested in Neurolenses: {investQuestion}</p>
            <p>What motivates your practice: {whatMotivates}</p>
          </div>
        </div>

        <div className="row">
          {" "}
          <div className="col-sm-12 bg-white text-dark font-weight-bold border border-dark rounded p-3 mb-5">
            <h3 className="mb-3 text-center font-weight-bold">Notes</h3>
            <p>Front Desk Notes: {frontDeskNotes}</p>
            <p>Technician Notes: {techNotes}</p>
            <p>Exam Lane Notes: {examLaneNotes}</p>
            <p>OD to Optical Flow: {currentFlow}</p>
          </div>
        </div>
      </div>
      <Footer backUrl="/doctorPage" nextUrl="/profitPage" />
    </div>
  );
};

export default resultPage;
