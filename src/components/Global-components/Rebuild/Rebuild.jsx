import React from "react";
import "./Rebuild.css";

export default function Rebuild() {
  return (
    <section className="rebuild">
      <br />
      <div className="rebuild-headerdiv">
        <p>BUILT FOR PEOPLE</p>
      </div>
      <div className="rebuild-div">
        <div className="rebuild-left">
          <h1>
            {" "}
            Let Us <span>Together Rebuild </span>Your <span>Business</span>
          </h1>
          <div className="text">
            <p>
              When connected with us, you aren't growing your business alone. We
              have your back and put in our best to contribute to the growth of
              your entire team and organization. So, if you are looking for the
              right agency that'll help you restructure your business with the
              right solutions, we are here for you!
            </p>
          </div>
        </div>
        <div className="rebuild-right">
          <img
            src="https://blazeskills.com/media/images/gallery/rebuild.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
