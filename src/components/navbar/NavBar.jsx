import React, { Fragment } from "react";
import "../navbar/NavBar.css";

import navIcon from "../../images/navIcon.svg";
const NavBar = () => {
  return (
    <Fragment>
      <div className="nav-container">
        <div className="nav-left">
          <div className="nav-icon">
            <img src={navIcon} alt="" />
          </div>
          <div className="nav-text">
            <p>
              mom's belief <br />
              beta
            </p>
          </div>
        </div>
        <div className="nav-middle">
          <ul className="nav-middle-ul">
            <li>Programms</li>
            <li>Emotional Intelligence</li>
            <li>Assessment</li>
            <li>Centers</li>
          </ul>
        </div>
        <div className="nav-right">
          <button type="button" className="login-btn">
            Login
          </button>
          <button type="button" className="signup-btn">
            SignUp
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default NavBar;
