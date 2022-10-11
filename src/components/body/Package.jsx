import React from "react";
import "../body/Package.css";
const Package = () => {
  return (
    <div className="package-container">
      <div className="package-wrapper">
        <div className="package-heading">
          <h2>Plans & Packages</h2>
        </div>
        <div className="package-para">
          <p>
            These programs work on applied neurological science. Our experts
            have curated each program with the knowledge
          </p>
        </div>
        <div className="package-price">
          <span className="span1">
            <p>₹ 5,200</p>

            <p>for 8 sessions per month</p>
          </span>
          <span className="span2">
            <p>₹ 5,200</p>

            <p>for 8 sessions per month</p>
          </span>
          <span className="span3">
            <p>₹ 5,200</p>

            <p>for 8 sessions per month</p>
          </span>
          <span className="span4">
            <p>₹ 5,200</p>

            <p>for 8 sessions per month</p>
          </span>
        </div>
        <div className="package-includes">
          <div className="package-heading2">
            <h4>Program Package Includes</h4>
          </div>
          <div className="package-table">
            <div className="package-ul">
              <span>
                <li>Minimum 14 Therapy Sessions</li>
              </span>
              <span>
                <li>Free Access To The Exclusive Webinars</li>
              </span>
              <span>
                <li>12 Q&A Sessions</li>
              </span>
            </div>
            <div className="package-ul">
              <span>
                <li>0% OFF on all the center services</li>
              </span>
              <span>
                <li>Free Access To The Exclusive Webinars</li>
              </span>
              <span>
                <li>12 Counselling Sessions</li>
              </span>
            </div>
            <div className="package-ul">
              <span>
                <li>Minimum 14 Therapy Sessions</li>
              </span>
              <span>
                <li>Access to community WhatsApp group</li>
              </span>
              <span>
                <li>12 Q&A Sessions</li>
              </span>
            </div>
            <div className="package-ul">
              <span>
                <li>12 Resource Kits</li>
              </span>
              <span>
                <li>2 Exclusive Expert Sessions Per Quarter</li>
              </span>
            </div>
          </div>
        </div>
        <div className="package-actions">
          <button type="button">Enroll Now</button>
          <p>Get 2 weeks free Access</p>
        </div>
      </div>
    </div>
  );
};

export default Package;
