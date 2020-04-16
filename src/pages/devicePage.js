import React from "react";
import Footer from "../components/footer";
import Choices from "../components/choices";
import "./devicePage.scss";

const DevicePage = ({
  questions: { deviceChampion, techNotes, deviceRuns },
  calculations: { whoToRun },
  handleQuestionChange,
  setQuestionValue,
}) => {
  // const surveyComplete = deviceChampion && techNotes;
  return (
    <div className="devicePage">
      <div className="row col-sm justify-content-center">
        <h1 className="text-success font-weight-bold m-2">TECHNICIANS</h1>
      </div>
      <div className="container border border-dark bg-light p-5">
        <div className="row col-sm justify-content-center m-1">
          <h3>What patients do you run on the device?</h3>
        </div>
        <Choices
          choices={[
            { label: "All Patients", value: 1 },
            { label: "Symptomatic Patients", value: 0.5 },
            { label: "Highly Symptomatic", value: 0.25 },
          ]}
          setChoice={(value) => setQuestionValue("deviceRuns", value)}
          value={deviceRuns}
        />
        <div className="row col-sm justify-content-center">
          <h3 className="border border-success text-success font-weight-bolder m-2 p-5">
            Daily Device Runs : {whoToRun || ""}
          </h3>{" "}
        </div>
        <div className="row col-sm">
          <h5>Who will lead running patients? </h5>
        </div>
        <div className="row col-sm">
          <input
            className="form-control"
            type="text"
            placeholder="Who is the Device Champion?"
            name="deviceChampion"
            value={deviceChampion}
            onChange={handleQuestionChange}
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
            name="techNotes"
            value={techNotes}
            onChange={handleQuestionChange}
          />
        </div>
      </div>
      <Footer backUrl="/lifestylePage" nextUrl="/DoctorPage" />
    </div>
  );
};

export default DevicePage;
