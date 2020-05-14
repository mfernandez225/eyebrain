import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import logo from "../images/logo_banner.png";

const linkToFlowSheet = "./home";
const linkToProfitCalculator = "./profitCalculator";

const StartingPage = () => {
  return (
    <div className="home">
      <div className="container border border-dark bg-white rounded mt-5 p-5">
        <div className="row col-xs justify-content-center">
          <img id="logo" className="mb-3" src={logo} alt="logo" />
        </div>
        <div className="row justify-content-center">
          <Link
            className="text-decoration-none text-light"
            to={linkToFlowSheet}
          >
            <div className="col-sm-6 m-5" linkToFlowSheet="/home">
              <svg
                className="bi bi-map text-secondary mb-2"
                width="3em"
                height="3em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M15.817.613A.5.5 0 0116 1v13a.5.5 0 01-.402.49l-5 1a.502.502 0 01-.196 0L5.5 14.51l-4.902.98A.5.5 0 010 15V2a.5.5 0 01.402-.49l5-1a.5.5 0 01.196 0l4.902.98 4.902-.98a.5.5 0 01.415.103zM10 2.41l-4-.8v11.98l4 .8V2.41zm1 11.98l4-.8V1.61l-4 .8v11.98zm-6-.8V1.61l-4 .8v11.98l4-.8z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="text-success">CUSTOMIZED FLOW COMMITMENT</h3>
            </div>
          </Link>

          <Link
            className="text-decoration-none text-light"
            to={linkToProfitCalculator}
          >
            <div
              className="col-sm-6 m-5"
              linkToProfitCalculator="/profitCalculator"
            >
              <svg
                className="bi bi-graph-up text-secondary mb-2"
                width="3em"
                height="3em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h1v16H0V0zm1 15h15v1H1v-1z" />
                <path
                  fillRule="evenodd"
                  d="M14.39 4.312L10.041 9.75 7 6.707l-3.646 3.647-.708-.708L7 5.293 9.959 8.25l3.65-4.563.781.624z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M10 3.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0V4h-3.5a.5.5 0 01-.5-.5z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              <h3 className="text-success">PROFIT CALCULATOR</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartingPage;
