import React from "react";
import Header from "../../components/header/Header";
import "./services.css";

export default function Services({ closeNavbar, handleClick, click }) {
  return (
    <div className="services_page">
      <Header click={click} handleClick={handleClick} />
    </div>
  );
}
