import React from "react";
import Header from "../../components/Global-components/header/Header";
import Solution from "../../components/about-components/solution/Solution";
import We from "../../components/about-components/we/We";
import Core from "../../components/about-components/Core/Core";
import Mission from "../../components/about-components/Mission/Mission";
import Project from "../../components/Global-components/Project/Project";
import Rebuild from "../../components/Global-components/Rebuild/Rebuild";
import Footer from "../../components/Global-components/Footer/Footer";

export default function About({ handleClick, click }) {
  return (
    <div className="about_page">
      <Header click={click} handleClick={handleClick} />
      <Solution />
      <We />
      <Core />
      <Mission />
      <Project />
      <Rebuild />
      <Footer />
    </div>
  );
}
