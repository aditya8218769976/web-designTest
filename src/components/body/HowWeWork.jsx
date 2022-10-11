import React from "react";
import workImage from "../../images/workImage.svg";
import "../body/HowWeWork.css";
const HowWeWork = () => {
  return (
    <div className="work-container">
      <div className="work-heading">
        <h4>How do we work?</h4>
      </div>
      <div className="work-para">
        <p>
          Mom’s Belief is an innovation and research-driven holistic care
          provider for children with Special Needs and operates through a
          Home-Based Program.
        </p>
      </div>
      <br />
      <div className="work-img">
        <img src={workImage} alt="" />
      </div>
    </div>
  );
};

export default HowWeWork;
