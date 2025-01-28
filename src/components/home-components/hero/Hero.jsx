import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";

export default function Hero({ closeNavbar }) {
  return (
    <div className="hero" onClick={closeNavbar}>
      <h1>Welcome To Bafuto Institute</h1>
      <div className="masterdiv">
        <div className="left">
          <img
            className="img"
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image1"
          />
        </div>
        <div className="right">
          <p className="p1">
            Welcome to our company, a leading provider of software development,
            cloud, IT training, IT staffing, and IT infrastructure setup
            services. We are on a mission to provide comprehensive and
            innovative solutions to our clients that meet their business needs
            and exceed their expectations.
          </p>
          <p className="p2">
            Our team of highly skilled and experienced professionals is
            committed to delivering exceptional services that add value to your
            business. We specialize in developing and implementing software
            solutions that automate your business processes, increase
            efficiency, and improve your bottom line.
          </p>
          <Link to="/about">
            <button>Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
