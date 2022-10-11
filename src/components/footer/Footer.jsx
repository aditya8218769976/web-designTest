import React from "react";
import "../footer/Footer.css";
import faceBook from "../../images/faceBook.svg";
import twitterImg from "../../images/twitterImg.svg";
import instaImg from "../../images/instaImg.svg";
// import footerImg from "../../images/footerImg.svg";
const Footer = () => {
  return (
    <div className="row footer-container">
      <div className="col-12">
        <div className="row footer-styling">
          <div className="col-6">
            <div className="row">
              <h4>mom's belief beta</h4>
            </div>
            <div className="row">
              <h4>
                <strong>Let's stay in touch</strong>
              </h4>
            </div>
            <div className="row">
              <p>
                Be it your child’s academic issues, teenage troubles,
                developmental queries, their future concerns, your relationship
                with them, or your own mental peace as a parent.
              </p>
            </div>
            <div className="row footer-image">
              <a href="https://www.facebook.com/login/">
                <img src={faceBook} alt="" />
              </a>
              <a href="https://twitter.com/login">
                <img src={twitterImg} alt="" />
              </a>
              <a href="https://www.instagram.com/?hl=en">
                <img src={instaImg} alt="" />
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <ul>
                  <li>
                    <strong>Company</strong>
                  </li>
                  <li>Home</li>
                  <li>About</li>
                  <li>Our Team</li>
                  <li>Contact Us</li>
                  <li>Careers</li>
                  <li>News room</li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    <strong>Resources</strong>
                  </li>
                  <li>Blogs</li>
                  <li>FAQs</li>
                  <li>Terms & Conditions</li>
                  <li>Return and refund technology</li>
                  <li>Privacy policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copywright border-top text-center pt-2">
        <p>Copyright © 2022 Mom’s Belief. A unit of Rays of Belief Pvt Ltd.</p>
      </div>
    </div>
  );
};

export default Footer;
