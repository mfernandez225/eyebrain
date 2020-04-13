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
        <h5>FLOW SUMMARY</h5>
      </div>
      <div className="container">
        <div className="border border-dark p-3 mb-5">
          <h5>Practice Insights:</h5>
          <p>Why you invested in Neurolenses: {investQuestion}</p>
          <p>What motivates your practice: {whatMotivates}</p>
        </div>
        <div className="border border-dark p-3 mb-5">
          <h5>Neurolens Champions:</h5>
          <p>Front Desk Champion: {indexChampion}</p>
          <p>Device Champion: {deviceChampion}</p>
        </div>
        <div className="border border-dark p-3 mb-5">
          <h5>Daily Average:</h5>
          <p>Daily Total of Lifestyle Index's: {whoToIndex}</p>
          <p>Daily Device Runs: {whoToRun}</p>
          <p>Daily Patient Conversations: {whoToTalkTo}</p>
        </div>
        <div className="border border-dark p-3 mb-5">
          <h5>Notes:</h5>
          <p>Front Desk Notes: {frontDeskNotes}</p>
          <p>Technician Notes: {techNotes}</p>
          <p>Exam Lane Notes: {examLaneNotes}</p>
          <p>OD to Optical Flow: {currentFlow}</p>
        </div>
      </div>
      <Footer backUrl="/doctorPage" nextUrl="/profitPage" />
    </div>
  );
};

export default resultPage;
