import React, { useState, useEffect } from "react";
import "./profileslider.css";

const ProfileSlider = () => {
  const profiles = [
    {
      id: 1,
      name: "SARAH JOHNSON, RECENT COURSE GRADUATE",
      description:
        "I never thought I would be able to learn new digital skills on my own, but Bafuto Institute proved me wrong. The platform is user-friendly, with a wide range of courses and expert instructors. I was able to acquire new skills and improve my resume, which helped me land a better job. I highly recommend this platform to anyone looking to enhance their digital skills.",
      image: "https://blazeskills.com/media/images/testimonials/person_1.jpg",
    },
    {
      id: 2,
      name: "DAVID KIM, DIGITAL MARKETER",
      description:
        "I was looking for a convenient and affordable way to upskill in the digital space, and Bafuto Institute exceeded my expectations. The online courses are comprehensive, interactive, and taught by industry professionals. I now have a better understanding of the latest digital trends and technologies, and I feel confident in my ability to excel in my career. I'm grateful for the opportunity to learn with Bafuto Institute",
      image: "https://blazeskills.com/media/images/testimonials/person_2.jpg",
    },
    {
      id: 3,
      name: "MARIA RODRIGUEZ, SMALL BUSINESS OWNER.",
      description:
        "As a small business owner, I was struggling to keep up with the ever-evolving digital landscape. Bafuto Institute provided me with the tools and knowledge I needed to level up my digital skills and improve my business operations. I am impressed by the quality of the courses, and the support from the instructors has been invaluable. I highly recommend Bafuto Institute to anyone looking to grow their digital capabilities.",
      image: "https://blazeskills.com/media/images/testimonials/person_3.jpg",
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
    <div className="head">
      <br />
      <div className="headerdiv">
        <p>TESTIMONIALS</p>
      </div>
      <h1>
        What Our <span>Clients</span> Say About <span>Us</span>
      </h1>
      <div
        className="profile-slider-container"
        // style={{ transform: `translateX(-${sliderPosition * 30}px)` }}
      >
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="profile-card"
            style={{ transform: `translateX(-${sliderPosition * 410}px)` }}
          >
            <div className="profile-image-bg">
              <img
                src={profile.image}
                alt={profile.name}
                className="profile-image"
              />
            </div>
            <h3 className="profile-name">{profile.name}</h3>
            <p className="profile-description">"{profile.description}"</p>
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
          disabled={sliderPosition >= profiles.length - cardsToSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ProfileSlider;
