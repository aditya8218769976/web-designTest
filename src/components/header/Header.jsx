import React, { Fragment } from "react";
import "../header/Header.css";

const Header = () => {
  return (
    <Fragment>
      <div className="header-container">
        <div className=" header-left">
          <p>Language : English</p>
        </div>
        <div className=" header-right">
          <p>
            Need consultation? Do you want to talk to an expert? Call us: +91
            90155-00061
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
