import React from "react";
import Footer from "../../components/footer";
import "./style.scss";
import Choices from "../../components/choices";
import logo from "../images/logo_banner.png";

const LifestylePage = ({
  questions: { frontDeskNotes, indexChampion, lifestyleIndex },
  calculations: { whoToIndex },
  handleQuestionChange,
  setQuestionValue,
}) => {
  // const surveyComplete = frontDeskNotes && indexChampion;
  return (
    <div className="lifestylePage">
      <div className="container bg-light border border-dark mt-5 p-5">
        <div className="row col-xs justify-content-center">
          <img id="logo" className="mb-2" src={logo} alt="logo" />
        </div>
        <div className="row col-xs justify-content-center">
          <h3 className="text-success text-center font-weight-bold m-2">
            FRONT DESK
          </h3>
        </div>
        <div className="row col-xs text-center justify-content-center m-1">
          <h5>Percentage of patients you will hand the lifestyle index to</h5>
        </div>
        <Choices
          choices={[
            { label: "100%", value: 1 },
            { label: "90%", value: 0.9 },
            { label: "75%", value: 0.75 },
          ]}
          setChoice={(value) => setQuestionValue("lifestyleIndex", value)}
          value={lifestyleIndex}
        />

        <div className="row col-xs justify-content-center">
          <h3 className="border border-success text-success text-center font-weight-bolder m-2 p-5">
            Daily Index Total: {whoToIndex || ""}
          </h3>{" "}
        </div>
        <div className="row col-xs">
          <h5>Who will lead handing these indexes out?</h5>
        </div>
        <div className="row col-xs">
          <input
            className="form-control"
            type="text"
            placeholder="Who is the Index Champion?"
            name="indexChampion"
            value={indexChampion}
            onChange={handleQuestionChange}
          />
        </div>
        <div className="row col-xs">
          <h5>Notes:</h5>
        </div>
        <div className="row col-xs">
          <input
            className="form-control"
            type="text"
            placeholder="Notes"
            name="frontDeskNotes"
            value={frontDeskNotes}
            onChange={handleQuestionChange}
          />
        </div>
      </div>
      <Footer backUrl="/practiceInfo" nextUrl="/devicePage" />
    </div>
  );
};

export default LifestylePage;
