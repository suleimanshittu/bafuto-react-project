import React from "react";
import Header from "../../components/Global-components/header/Header";
import Contacthero from "../../components/contact-components/contact-hero/Contacthero";
import Information from "../../components/contact-components/Information/Information";
import Footer from "../../components/Global-components/Footer/Footer";

export default function Contact({ handleClick, click }) {
  return (
    <div className="contact_page">
      <Header click={click} handleClick={handleClick} />
      <Contacthero />
      <Information />
      <Footer />
    </div>
  );
}
