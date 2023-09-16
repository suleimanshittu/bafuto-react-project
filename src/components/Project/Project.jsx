import React from "react";
import "./project.css";

export default function Project() {
  return (
    <section className="project">
      <div className="project-left">
        <img
          src="https://blazeskills.com/media/images/gallery/Business%20colleagues%20having%20a%20conversation%20stock%20photo.jpg"
          alt=""
        />
      </div>
      <div className="project-right">
        <div className="text">
          <h1>
            {" "}
            Have A <span>Project</span> On Your Mind?
          </h1>
          <p>
            We can help you bring your ideas to life. Let's talk about what we
            can build and raise together.
          </p>
          <button>Connect With Us</button>
        </div>
      </div>
    </section>
  );
}
