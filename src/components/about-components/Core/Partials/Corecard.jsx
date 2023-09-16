import React from "react";
import "./corecard.css";

export default function Corecard({ text, icon }) {
  return (
    <div className="core-card">
      <p className="core-text">{text}</p>
      <div className="core-icon">{icon}</div>
    </div>
  );
}
