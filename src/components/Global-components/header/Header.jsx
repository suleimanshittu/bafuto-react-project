import React, { useState } from "react";
import "./header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Header({ click, handleClick }) {
  const location = useLocation();

  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1>
            <Link to="/">Bafuto</Link>
          </h1>
        </div>
        <ul className={click ? "navbar active" : "navbar"}>
          <li className={location.pathname === "/" ? "active" : ""}>
            <a href="/">Home</a>
          </li>
          <li className={location.pathname === "/about" ? "active" : ""}>
            <Link to="/about">About</Link>
          </li>
          <li className={location.pathname === "/services" ? "active" : ""}>
            <Link to="/services">Services</Link>
          </li>
          <li className={location.pathname === "/contact" ? "active" : ""}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <ul className="navbar1">
          <li>
            <Link to="/">
              <button className="button1">Register For Training</button>
            </Link>
          </li>
        </ul>
        <div className="btn_container">
          <button onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}
