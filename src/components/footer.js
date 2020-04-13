import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import "./footer.scss";

const Footer = ({
  backText,
  backUrl,
  backDisabled,
  nextText,
  nextUrl,
  nextDisabled,
}) => {
  return (
    <footer className="row justify-content-between">
      {(backUrl && (
        <div
          className={cx(`col-xs-1 btn btn-secondary btn-sm m-5`, {
            disabled: backDisabled,
          })}
        >
          <Link className="text-decoration-none text-light" to={backUrl}>
            {backText || "BACK"}
          </Link>
        </div>
      )) || <span></span>}
      {nextUrl && (
        <div
          className={cx(`col-xs-1 btn btn-secondary btn-sm m-5`, {
            disabled: nextDisabled,
          })}
        >
          <Link className="text-decoration-none text-light" to={nextUrl}>
            {nextText || "NEXT"}
          </Link>
        </div>
      )}
    </footer>
  );
};

export default Footer;
