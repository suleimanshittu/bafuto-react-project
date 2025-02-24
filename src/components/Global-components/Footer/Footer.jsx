import React from "react";
import "./footer.css";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footerdiv1">
          <h1>About Bafuto</h1>
          <p>
            A leading provider of software development, cloud services, IT
            training, IT staffing, and IT infrastructure setup services. We are
            on a mission to provide comprehensive and innovative solutions to
            our clients that meet their business needs and exceed their
            expectations.
          </p>
          <button>Learn More About Us</button>
        </div>
        <div className="footerdiv2">
          <h1>Company</h1>
          <div className="list">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link to="/services">
              <li>Our Services</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
          </div>
        </div>
        <div className="footerdiv3">
          <h1>Our Policies</h1>
          <div className="list">
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
          </div>
        </div>
        <div className="footerdiv4">
          <h1>Contact Us</h1>
          <div className="list">
            <p>62, IKOTUN/ISOLO ROAD, ILE-IWE BUS STOP, Egbe 100265, Lagos</p>
            <li>info@bafuto.com</li>
            <li>+(234) 802 362 4940</li>
            <li>
              <span>
                <BiLogoFacebookCircle className="icon1" />
                <BiLogoTwitter className="icon" />
                <BiLogoInstagram className="icon" />
                <BiLogoLinkedinSquare className="icon" />
                <BiLogoYoutube className="icon" />
              </span>
            </li>
          </div>
        </div>
      </div>
      <hr className="underline" />
      <p className="last-paragraph">
        Copyright © 2023 Bafuto Institute Systems LLC | All Rights Reserved (by){" "}
        <span>Shittu Suleiman</span>
      </p>
    </section>
  );
}
