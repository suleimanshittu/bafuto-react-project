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
        <div className="card1"></div>
        <div className="card2"></div>
        <div className="card3"></div>
        <div className="card4"></div>
      </Slider>
    </div>
  );
};
export default FullSlider;
