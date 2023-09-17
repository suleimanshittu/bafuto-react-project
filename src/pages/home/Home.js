import React, { useState } from "react";
import Header from "../../components/Global-components/header/Header";
import Hero from "../../components/home-components/hero/Hero";
import Software from "../../components/home-components/Software/Software";
import Business from "../../components/home-components/Business/Business";
import Project from "../../components/Global-components/Project/Project";
import Rebuild from "../../components/Global-components/Rebuild/Rebuild";
import ProfileSlider from "../../components/home-components/ProfileSlider/ProfileSlider";
import Subscribe from "../../components/home-components/Subscribe/Subscribe";
import Footer from "../../components/Global-components/Footer/Footer";
// import FullSlider from "../../components/home-components/FullSlider/FullSlider";

export default function Home({ handleClick, click }) {
  return (
    <div>
      <Header click={click} handleClick={handleClick} />
      {/* <FullSlider /> */}
      <Hero />
      <Software />
      <Business />
      <Project />
      <Rebuild />
      <ProfileSlider />
      <Subscribe />
      <Footer />
    </div>
  );
}
