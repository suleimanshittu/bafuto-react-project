import React from "react";
import "./about.css";
import Header from "../../components/header/Header";
import Solution from "../../components/about-components/solution/Solution";
import We from "../../components/about-components/we/We";
import Core from "../../components/about-components/Core/Core";
import Mission from "../../components/about-components/Mission/Mission";
import Project from "../../components/Project/Project";
import Rebuild from "../../components/Rebuild/Rebuild";

export default function About({ closeNavbar, handleClick, click }) {
  return (
    <div className="about_page">
      <Header click={click} handleClick={handleClick} />
      <Solution />
      <We />
      <Core />
      <Mission />
      <Project />
      <Rebuild />
    </div>
  );
}
