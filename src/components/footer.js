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
  children,
}) => {
  return (
    <footer className="row justify-content-between">
      {(backUrl && (
        <Link className="text-decoration-none text-light" to={backUrl}>
          <div
            className={cx(`col-xs-1 btn btn-success btn-lg m-5 btn-footer`, {
              disabled: backDisabled,
            })}
          >
            {backText || "BACK"}
          </div>
        </Link>
      )) || <span></span>}
      {children}
      {nextUrl && (
        <Link className="text-decoration-none text-light" to={nextUrl}>
          <div
            className={cx(`col-xs-1 btn btn-success btn-lg m-5 btn-footer`, {
              disabled: nextDisabled,
            })}
          >
            {nextText || "NEXT"}
          </div>
        </Link>
      )}
    </footer>
  );
};

export default Footer;
