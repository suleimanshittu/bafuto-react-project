import React from "react";
import "./business.css";

export default function Business() {
  return (
    <section className="business">
      <div className="business-left">
        <h1>
          {" "}
          <span>Why</span> Choose Us?
        </h1>
        <p>
          We are the right team for your business. We have the expertise,
          knowledge and experience to offer impartial advice and services to
          drive your business to success.
        </p>
      </div>
      <div className="business-right">
        <img
          src="https://blazeskills.com/media/images/gallery/business%20men%20handshake.jpg"
          alt=""
        />
      </div>
    </section>
  );
}
