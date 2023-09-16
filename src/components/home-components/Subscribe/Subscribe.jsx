import React, { useState } from "react";
import "./subscribe.css";

export default function Subscribe() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the submitted email here...
    console.log(email);
  };

  return (
    <section className="subscribe">
      <div className="left">
        <div className="text">
          <p>
            Looking for a <span>solution</span> <br /> for your business?
          </p>
          <h1>Subscribe!</h1>
        </div>
      </div>
      <div className="right">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your Email address"
            value={email}
            onChange={handleEmailChange}
          />
          <button type="submit">I'm Interested</button>
        </form>
      </div>
    </section>
  );
}
