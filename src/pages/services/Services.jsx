import React from "react";
import Header from "../../components/Global-components/header/Header";
import Servicehero from "../../components/service-components/Servicehero/Servicehero";
// import WorkSlider from "../../components/service-components/WorkSlider/WorkSlider";
import ProfileSlider from "../../components/home-components/ProfileSlider/ProfileSlider";
import Project from "../../components/Global-components/Project/Project";
import Rebuild from "../../components/Global-components/Rebuild/Rebuild";
import Footer from "../../components/Global-components/Footer/Footer";

export default function Services({ handleClick, click }) {
  return (
    <div className="services_page">
      <Header click={click} handleClick={handleClick} />
      {/* <WorkSlider /> */}
      <Servicehero />
      <ProfileSlider />
      <Project />
      <Rebuild />
      <Footer />
    </div>
  );
}
