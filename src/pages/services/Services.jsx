import React from "react";
import Header from "../../components/Global-components/header/Header";
import Servicehero from "../../components/service-components/Servicehero/Servicehero";
import Help from "../../components/service-components/Help/Help";
import Project from "../../components/Global-components/Project/Project";
import Rebuild from "../../components/Global-components/Rebuild/Rebuild";
import Footer from "../../components/Global-components/Footer/Footer";

export default function Services({ handleClick, click }) {
  return (
    <div className="services_page">
      <Header click={click} handleClick={handleClick} />
      <Servicehero />
      <Help />
      <Project />
      <Rebuild />
      <Footer />
    </div>
  );
}
