import React from "react";
import Header from "../../components/Global-components/header/Header";

export default function Contact({ handleClick, click }) {
  return (
    <div className="contact_page">
      <Header click={click} handleClick={handleClick} />
    </div>
  );
}
