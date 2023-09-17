import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./fullslider.css";

const FullSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="slider-wrapper">
      <Slider className="slider" {...settings}>
        <div className="card1">
          <div className="left">
            <h1>IT staffing</h1>
            <p>
              In a technological driven World where there is a huge knowledge
              gap. We come in to relieve you of the burden of sourcing for the
              right and highly talented IT Professionals to help drive your
              business goals.
            </p>
            <button>Get Started For Free</button>
          </div>
          <div className="right">
            <img
              className="image1"
              src="https://blazeskills.com/media/images/gallery/employed%20staff%20illustration.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="card2">
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
            <img
              className="image1"
              src="https://blazeskills.com/media/images/gallery/employed%20staff%20illustration.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="card3">
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
            <img
              className="image1"
              src="https://blazeskills.com/media/images/gallery/employed%20staff%20illustration.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="card4">
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
            <img
              className="image1"
              src="https://blazeskills.com/media/images/gallery/employed%20staff%20illustration.jpg"
              alt=""
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default FullSlider;
