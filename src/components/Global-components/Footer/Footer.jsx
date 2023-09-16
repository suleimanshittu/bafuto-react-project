import React from "react";
import "./footer.css";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footerdiv1">
          <h1>About Blazeskills</h1>
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
            <li>Home</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Contact Us</li>
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
            <p>203 North Baltimore Avenue, Mount Holly Springs, PA</p>
            <li>info@blazeskills.com</li>
            <li>+1 (717) 516-5561</li>
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
        Copyright © 2023 Bafuto Solutions Systems LLC | All Rights Reserved
      </p>
    </section>
  );
}
