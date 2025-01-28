import React from "react";
import "./software.css";
import { Link } from "react-router-dom";

const Software = () => {
  const cards = [
    {
      id: 1,
      title: "Software Development",
      description:
        "Our team of experienced software developers is dedicated to providing you with top-notch solutions that meet your needs and exceed your expectations. whether you need to build a new application from scratch, improve an existing one, or integrate different systems, we have the expertise to make it happen.",
      button: "Get Quote",
    },
    {
      id: 2,
      title: "IT Training",
      description:
        " Our team of experienced software developers is dedicated to providing you with top-notch solutions that meet your needs and exceed your expectations. whether you need to build a new application from scratch, improve an existing one, or integrate different systems, we have the expertise to make it happen.",
      button: "Get Quote",
    },
    {
      id: 3,
      title: "Cloud Migration",
      description:
        "Our team of experienced software developers is dedicated to providing you with top-notch solutions that meet your needs and exceed your expectations. whether you need to build a new application from scratch, improve an existing one, or integrate different systems, we have the expertise to make it happen.",
      button: "Get Quote",
    },
  ];

  return (
    <section className="software">
      <section className="container" id="white-section">
        <h1 className="software-head">Talk To Us About</h1>
      </section>
      <section className="container" id="blue-section">
        <div className="software-slider-container">
          {cards.map((card) => (
            <div key={card.id} className="software-card">
              <h1 className="software-title">{card.title}</h1>
              <p className="software-description">{card.description}</p>
              <Link to="/contact">
                <button className="software-button">{card.button}</button>
              </Link>
            </div>
          ))}
        </div>
        <Link to="/services">
          <button className="button2">View All Services</button>
        </Link>
      </section>
    </section>
  );
};
export default Software;
