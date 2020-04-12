import React from "react";
import { Link } from "react-router-dom";

const resultPage = ({
  practiceName,
  investQuestion,
  whatMotivates,
  dailyComps,
  frontDeskNotes,
  indexChampion,
  techNotes,
  deviceChampion,
  examLaneNotes,
  whoToIndex,
  whoToRun,
  currentFlow,
  patientsHelped,
}) => {
  return (
    <div className="resultsPage">
      <div className="row col-sm justify-content-center">
        {" "}
        <h5>FLOW SUMMARY</h5>
      </div>
      <div className="container border border-dark p-5">
        <p>Practice Name: {practiceName}</p>
        <p>Why you invested in Neurolenses: {investQuestion}</p>
        <p>What motivates your practice: {whatMotivates}</p>
        <p>Daily Comp Exams: {dailyComps}</p>
        <p>Index Champion Notes: {indexChampion}</p>
        <p>Front Desk Notes: {frontDeskNotes}</p>
        <p>Device Champion Notes: {deviceChampion}</p>
        <p>Technician Notes: {techNotes}</p>
        <p>Exam Lane Notes: {examLaneNotes}</p>
        <p>OD Flow: {currentFlow}</p>
        <p>Daily Total of Lifestyle Index's: {whoToIndex}</p>
        <p>Daily Device Runs: {whoToRun}</p>
        <p>Patients Helped: {patientsHelped}</p>
      </div>
      <footer className="row justify-content-between fixed-bottom">
        <div className="col-xs-1 btn btn-secondary btn-sm m-5">
          <Link className="text-decoration-none text-light" to="/doctorPage">
            BACK
          </Link>
        </div>
        <div className="col-xs-1 btn btn-secondary btn-sm m-5">
          <Link className="text-decoration-none text-light" to="/">
            HOME
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default resultPage;
