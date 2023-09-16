import React from "react";
import "./core.css";
import Corecard from "./Partials/Corecard";
import { BsCheck2Circle } from "react-icons/bs";

export default function Core() {
  return (
    <section className="core">
      <h1>
        Our <span>Core Values</span>
      </h1>
      <div className="corecard-container">
        <Corecard
          text={"Committed to delivering the best"}
          icon={<BsCheck2Circle />}
        />
        <Corecard
          text={"Honest and transparent services"}
          icon={<BsCheck2Circle />}
        />
        <Corecard
          text={"We care for your business just like ours"}
          icon={<BsCheck2Circle />}
        />
        <Corecard
          text={"Keep learning and adapting to new technologies"}
          icon={<BsCheck2Circle />}
        />
      </div>
    </section>
  );
}
