import React from "react";
import "../body/Form.css";
const Form = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <div className="form-heading">
          <h3>Got More Questions? Talk To Our Experts</h3>
        </div>
        <div className="form-para">
          <p>
            These programs work on applied neurological science. Our experts
            have curated each program with the knowledge
          </p>
        </div>
        <div className="inputForm">
          <div className="inputForm-heading">
            <p>Find the best program for your child</p>
            <div className="inputData-style">
              <span className="inputData-style-left">
                <label htmlFor="text">Your Name</label>
                <br />
                <input type="text" placeholder="Enter your name" />
              </span>
              <span className="inputData-style-middle">
                <label htmlFor="text">Your Child's Name</label>
                <br />
                <input type="text" placeholder="Enter your child's name" />
              </span>
              <span className="inputData-style-right">
                <label htmlFor="text">Child's Age</label>
                <br />
                <input type="number" placeholder="Enter child's age" />
              </span>
            </div>
            <div className="form-mail">
              <span className="form-mail-left">
                <label htmlFor="email">E-mail id</label>
                <br />
                <input type="email" placeholder="Enter email id" />
              </span>
              <span className="form-mail-right">
                <label htmlFor="number">Mobile Number</label>
                <br />
                <input type="number" placeholder="Enter mobile no." />
              </span>
            </div>
            <div className="form-btn">
              <span>
                <button type="submit">Request a call</button>
              </span>
              <br />
              <span>
                <p>We’ll keep your information private & secure</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
