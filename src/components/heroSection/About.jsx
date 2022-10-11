import React, { Fragment } from "react";
import "../heroSection/About.css";
import heroIcon from "../../images/heroIcon.svg";
import heroIcon1 from "../../images/heroIcon1.svg";

const About = () => {
  return (
    <Fragment>
      <div className="about-container">
        <div className="about-wrapper">
          <div className="about-heading">
            <h2>We Empower Mom’s Beliefs & Enable Child’s Growth.</h2>
          </div>
          <div className="about-para">
            <p>
              We are a research-driven holistic care provider for growing
              children through a wide array of programs.
            </p>
          </div>
        </div>
        <div className="about-img">
          <div className="about-img1">
            <img src={heroIcon} alt="" />
          </div>
          <div className="about-img-middle">
            <div className="about-middle">
              <button type="submit">Explore Programms</button>
            </div>
          </div>
          <div className="about-img2">
            <img src={heroIcon1} alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
