import React from "react";
import "./missioncard.css";

export default function Missioncard({
  image,
  title,
  subtitle1,
  subtitle2,
  subtitle3,
}) {
  return (
    <div className="mission-card">
      <img src={image} alt="" />
      <p className="mission-title">{title}</p>
      <div className="mission-subtitle">
        <p className="mission-subtitle1">{subtitle1}</p>
        <p className="mission-subtitle2">{subtitle2}</p>
        <p className="mission-subtitle2">{subtitle3}</p>
      </div>
    </div>
  );
}
