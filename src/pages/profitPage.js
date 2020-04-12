import React from "react";
import { Link } from "react-router-dom";

const ProfitPage = ({
  patientsHelped,
  whoToIndex,
  whoToRun,
  lensConversion,
}) => {
  return (
    <div className="profitPage">
      <div className="row col-sm justify-content-center">
        {" "}
        <h5>NEUROLENS POTENTIAL</h5>
      </div>
      <div className="container">
        <div className="border border-dark p-3 mb-5">
          <h5>Neurolens Potential</h5>
          <p>Potential Patients Helped per Week: {patientsHelped}</p>
          <p>Weekly ROI:</p>
          <p>Potential Patients Helped per Month:</p>
          <p>Monthly ROI:</p>
          <p>Potential Patients Helped per Year:</p>
          <p>Yearly ROI:</p>
        </div>
        <div className="border border-dark p-3 mb-5">
          <p>Total Indexes: {whoToIndex}</p>
        </div>
        <div className="border border-dark p-3 mb-5">
          <p>Total Device Runs:{whoToRun}</p>
        </div>
        <div className="border border-dark p-3 mb-5">
          <p>Conversion %: {lensConversion}</p>
        </div>
        <footer className="row justify-content-between fixed-bottom">
          <div className="col-xs-1 btn btn-secondary btn-sm m-5">
            <Link className="text-decoration-none text-light" to="/resultPage">
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
    </div>
  );
};

export default ProfitPage;
