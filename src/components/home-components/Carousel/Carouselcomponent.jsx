import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
import { Link } from "react-router-dom";

const Carouselcomponent = () => {
  return (
    <div className="carousel-container">
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
      >
        <div className="carousel-div1">
          <div className="left">
            <h1>IT staffing</h1>
            <p>
              In a technological driven World where there is a huge knowledge
              gap. We come in to relieve you of the burden of sourcing for the
              right and highly talented IT Professionals to help drive your
              business goals.
            </p>
            <Link to="/contact">
              <button className="started-button">Get Started For Free</button>
            </Link>
          </div>
          <div className="right">
            <img
              src="https://blazeskills.com/media/images/gallery/employed%20staff%20illustration.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="carousel-div1">
          <div className="left">
            <h1>IT Consulting Strategy</h1>
            <p>
              We take it upon ourselves to help you research into the best IT
              solutions and come up with ideas to recreate something new in your
              business. We do this be constantly reviewing our processes to be
              inline with yours.
            </p>
            <Link to="/contact">
              <button className="started-button">Get Started For Free</button>
            </Link>
          </div>
          <div className="right">
            <img
              src="https://blazeskills.com/media/images/gallery/people%20consulting%20for%20an%20IT%20service.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="carousel-div1">
          <div className="left">
            <h1>IT Training Services</h1>
            <p>
              We have selected IT training programmes ranging from the
              development (Full Stack, Front End, and Back End), to cloud
              computing, Linux, and DevOps. These programmes have been
              thoroughly selected and tailored to meet the demands of modern
              technological needs.
            </p>
            <Link to="/contact">
              <button className="started-button">Get Started For Free</button>
            </Link>
          </div>
          <div className="right">
            <img
              src="https://blazeskills.com/media/images/gallery/SKILL%20CONCEPT%20stock%20photo.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="carousel-div1">
          <div className="left">
            <h1>IT Infrastructure Design & Development for Startups</h1>
            <p>
              Looking out for custom IT Infrastructure solutions for your
              startup? Our team will develop and deliver that products that will
              serve your business purpose.
            </p>
            <Link to="/contact">
              <button className="started-button">Get Started For Free</button>
            </Link>
          </div>
          <div className="right">
            <img
              src="https://blazeskills.com/media/images/gallery/IT%20infrastructure%20design.jpg"
              alt=""
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Carouselcomponent;
