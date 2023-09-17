import React, { useState } from "react";
import "./information.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { HiLocationMarker } from "react-icons/hi";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";

export default function Information() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [preferredService, setPreferredService] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    // Reset form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setCompanySize("");
    setPreferredService("");
    setSubject("");
    setMessage("");
  };

  return (
    <section className="information">
      <br />
      <div className="information-headerdiv">
        <p>CONTACT US</p>
      </div>
      <h1 className="head-word">Get In Touch</h1>
      <div className="informationdiv">
        <div className="information-left">
          <div className="top">
            <h1>Contact Information</h1>
            <p>Let us know how we can be of assistance</p>
          </div>
          <div className="mid">
            <div className="mid-icons">
              <BsFillTelephoneFill className="icon" />
              <HiMail className="icon" />
              <HiLocationMarker className="icon" />
            </div>
            <div className="mid-paragraph">
              <p className="sentence1">+1 (717) 516-5561</p>
              <p className="sentence2">info@bafutoskills.com</p>
              <p>203 North Baltimore Avenue, Mount Holly Springs, PA</p>
            </div>
          </div>
          <div className="bottom">
            <h3>Follow Us On</h3>
            <div className="bottom-icons">
              <BiLogoFacebookCircle className="icon1" />
              <BiLogoTwitter className="icon" />
              <BiLogoInstagram className="icon" />
              <BiLogoLinkedinSquare className="icon" />
            </div>
          </div>
        </div>
        <div className="information-right">
          <div>
            <h1>Send Us Your Project Requirements</h1>
            <form onSubmit={handleSubmit}>
              <div className="flexdiv">
                <div className="firstnamediv">
                  <label>
                    First Name
                    <br />
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </label>
                </div>
                <div className="lastnamediv">
                  <label>
                    Last Name
                    <br />
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </label>
                </div>
              </div>
              <div className="email-div">
                <label>
                  Email Address
                  <br />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <div className="flexdiv1">
                <div className="companydiv">
                  <label>
                    <select
                      value={companySize}
                      onChange={(e) => setCompanySize(e.target.value)}
                    >
                      <option value="">Company Size</option>
                      <option value="service1">hello 1</option>
                      <option value="service2">Service 2</option>
                      <option value="service3">Service 3</option>
                    </select>
                  </label>
                </div>
                <div className="servicediv">
                  <label>
                    <select
                      value={preferredService}
                      onChange={(e) => setPreferredService(e.target.value)}
                    >
                      <option value="">Choose Your Prefered Service</option>
                      <option value="service1">Service 1</option>
                      <option value="service2">Service 2</option>
                      <option value="service3">Service 3</option>
                    </select>
                  </label>
                </div>
              </div>
              <div className="subject-div">
                <label>
                  Subject
                  <br />
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </label>
              </div>
              <div className="message-div">
                <label>
                  Message
                  <br />
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </label>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
