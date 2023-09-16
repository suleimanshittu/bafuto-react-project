import React from "react";
import "./mission.css";
import Missioncard from "./Mission-partials/Missioncard";

export default function Mission() {
  return (
    <section className="mission">
      <br />
      <div className="mission-headerdiv">
        <p>MISSION / VISION</p>
      </div>
      <div className="mission-card-container">
        <Missioncard
          image={"https://blazeskills.com/media/images/gallery/mission.jpg"}
          title={"Our Mission"}
          subtitle1={
            "Our mission is to provide cutting-edge technology solutions to businesses that promote growth, efficiency, and innovation."
          }
          subtitle2={
            "We are committed to delivering exceptional service and expertise on every project we take on, leveraging our extensive industry knowledge, technical skills, and collaborative approach to deliver results that exceed our clients' expectations."
          }
          subtitle3={
            "We strive to establish long-term relationships based on trust, transparency, and shared success, as well as to be recognized as a leader in the IT services industry for our dedication to excellence and customer satisfaction."
          }
        />
        <Missioncard
          image={"https://blazeskills.com/media/images/gallery/vision.jpg"}
          title={"Our Vision"}
          subtitle1={
            "Our vision is to be the go-to partner for companies looking to transform their operations and gain a competitive advantage through technological innovation."
          }
          subtitle2={
            "We want to be known as a trusted advisor and solutions provider who uses cutting-edge IT to help our clients achieve their strategic goals and stay ahead of the curve in a rapidly changing market."
          }
          subtitle3={
            "We aim to foster an environment of innovation, collaboration, and excellence by attracting and retaining the best talent in the industry and continuously improving our capabilities to provide exceptional value to our clients."
          }
        />
      </div>
    </section>
  );
}
