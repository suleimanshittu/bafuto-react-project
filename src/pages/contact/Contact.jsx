import React from "react";
import Header from "../../components/header/Header";
import "./contact.css";

export default function Contact({ closeNavbar, handleClick, click }) {
  return (
    <div className="contact_page">
      <Header click={click} handleClick={handleClick} />
    </div>
  );
}
