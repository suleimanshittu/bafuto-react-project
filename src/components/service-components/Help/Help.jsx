import React, { useState, useEffect } from "react";
import "./help.css";

const Help = () => {
  const helps = [
    {
      id: 1,
      name: "IT Staffing",
      description:
        "At BlazeSkills, we understand the challenges associated with recruiting to fill IT positions with the most highly skilled and sought-after IT experts. That's why we're here for you...",
      image:
        "https://blazeskills.com/media/images/gallery/employed%20staff%20illustration.jpg",
    },
    {
      id: 2,
      name: "IT Consulting",
      description:
        "We have top-notch and quality consultants in place to help you with the right ideas and advice you need to grow your business to the level of success...",
      image:
        "https://blazeskills.com/media/images/gallery/people%20consulting%20for%20an%20IT%20service.jpg",
    },
    {
      id: 3,
      name: "IT Infrastructure",
      description:
        "Our experts are deliberate in helping you to administer and manage your IT infrastructure, hardware, application support, security, and data in a proactive way to ensure scalability and reliability...",
      image:
        "https://blazeskills.com/media/images/gallery/IT%20infrastructure%20design.jpg",
    },
    {
      id: 4,
      name: "IT Training",
      description:
        "Our IT training programmes are well-designed and tailored to meet the modern, in-demand IT skills. You have the opportunity to learn from our learners, create connections and create a portfolio..",
      image:
        "https://blazeskills.com/media/images/gallery/SKILL%20CONCEPT%20stock%20photo.jpg",
    },
    {
      id: 5,
      name: "Software Development",
      description:
        "Our team of experienced software developers is dedicated to providing you with top-notch solutions that meet your needs and exceed your expectations. whether you need to build a new application from scratch, improve an existing one, or integrate different systems, we have the expertise to make it happen..",
      image:
        "https://blazeskills.com/media/images/gallery/software%20developer%20working.jpg",
    },
    {
      id: 6,
      name: "Cloud Migration & Infrastructure Setup",
      description:
        "Cloud migration and proper cloud infrastructure management can be a complex process, requiring careful planning and execution. This is where we come in to take the burden off your shoulders while you focus on your core business goals.",
      image:
        "https://blazeskills.com/media/images/gallery/Cloud%20Computing.jpg",
    },
    {
      id: 7,
      name: "Website Development Hosting Services",
      description:
        "Web development and hosting services are essential for any business or individual looking to establish a strong online presence. Here's some content you can use to promote your web development and hosting services",
      image:
        "https://blazeskills.com/media/images/gallery/men%20working%20in%20the%20server%20room.jpg",
    },
  ];

  const [sliderPosition, setSliderPosition] = useState(0);
  const [cardsToSlide, setCardsToSlide] = useState(3);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setCardsToSlide(1);
    } else if (window.innerWidth < 1200) {
      setCardsToSlide(2);
    } else {
      setCardsToSlide(3);
    }
  }, []);

  const slideLeft = () => {
    setSliderPosition(sliderPosition - cardsToSlide);
  };

  const slideRight = () => {
    setSliderPosition(sliderPosition + cardsToSlide);
  };

  return (
    <section className="help">
      <br />
      <div className="help-headerdiv">
        <p>SERVICES</p>
      </div>
      <h1>We Can Help You In</h1>
      <div
        className="help-slider-container"
        style={{ transform: `translateX(-${sliderPosition * 320}px)` }}
      >
        {helps.map((help) => (
          <div key={help.id} className="help-card">
            <img src={help.image} alt={help.name} className="help-image" />
            <h3 className="help-name">{help.name}</h3>
            <p className="help-description">{help.description}</p>
            <button className="help-buttton">Get Quote</button>
          </div>
        ))}
      </div>
      <div className="slider-controls">
        <button
          className="slider-button1"
          onClick={slideLeft}
          disabled={sliderPosition === 0}
        >
          &lt;
        </button>
        <button
          className="slider-button2"
          onClick={slideRight}
          disabled={sliderPosition >= helps.length - cardsToSlide}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};
export default Help;
