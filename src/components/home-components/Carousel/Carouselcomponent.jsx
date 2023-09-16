import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
import image1 from "../../../images/image1.jpeg";

const Carouselcomponent = () => {
  return (
    <div className="carousel-container">
      <Carousel showArrows={false} showThumbs={false} showStatus={false}>
        <div className="carousel-div1">
          <div className="left">
            <h1>IT staffing</h1>
            <p>
              In a technological driven World where there is a huge <br />{" "}
              knowledge gap. We come in to relieve you of the burden of <br />
              sourcing for the right and highly talented IT Professionals to{" "}
              <br />
              help drive your business goals.
            </p>
            <button>Get Started For Free</button>
          </div>
          <div className="right">
            <img className="img1" src={image1} alt="" />
          </div>
        </div>
        <div className="carousel-div2">
          <div className="left">
            <h1>IT staffing</h1>
            <p>
              In a technological driven World where there is a huge <br />{" "}
              knowledge gap. We come in to relieve you of the burden of <br />
              sourcing for the right and highly talented IT Professionals to{" "}
              <br />
              help drive your business goals.
            </p>
            <button className="started-button">Get Started For Free</button>
          </div>
          <div className="right">
            <img src={image1} alt="" />
          </div>
        </div>
        <div className="carousel-div3">
          <div className="left">
            <h1>IT staffing</h1>
            <p>
              In a technological driven World where there is a huge <br />{" "}
              knowledge gap. We come in to relieve you of the burden of <br />
              sourcing for the right and highly talented IT Professionals to{" "}
              <br />
              help drive your business goals.
            </p>
            <button className="started-button">Get Started For Free</button>
          </div>
          <div className="right">
            <img src={image1} alt="" />
          </div>
        </div>
        <div className="carousel-div4">
          <div className="left">
            <h1>IT staffing</h1>
            <p>
              In a technological driven World where there is a huge <br />{" "}
              knowledge gap. We come in to relieve you of the burden of <br />
              sourcing for the right and highly talented IT Professionals to{" "}
              <br />
              help drive your business goals.
            </p>
            <button className="started-button">Get Started For Free</button>
          </div>
          <div className="right">
            <img src={image1} alt="" />
          </div>
        </div>
      </Carousel>
    </div>
  );
};
export default Carouselcomponent;
