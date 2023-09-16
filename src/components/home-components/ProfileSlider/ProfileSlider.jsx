import React from "react";
import "./profileslider.css";

const ProfileSlider = () => {
  const profiles = [
    {
      id: 1,
      name: "SARAH JOHNSON, RECENT COURSE GRADUATE",
      description:
        "I never thought I would be able to learn new digital skills on my own, but Blazeskills proved me wrong. The platform is user-friendly, with a wide range of courses and expert instructors. I was able to acquire new skills and improve my resume, which helped me land a better job. I highly recommend this platform to anyone looking to enhance their digital skills.",
      image: "https://blazeskills.com/media/images/testimonials/person_1.jpg",
    },
    {
      id: 2,
      name: "DAVID KIM, DIGITAL MARKETER",
      description:
        "I was looking for a convenient and affordable way to upskill in the digital space, and Blazeskills exceeded my expectations. The online courses are comprehensive, interactive, and taught by industry professionals. I now have a better understanding of the latest digital trends and technologies, and I feel confident in my ability to excel in my career. I'm grateful for the opportunity to learn with blazeskills.",
      image: "https://blazeskills.com/media/images/testimonials/person_2.jpg",
    },
    {
      id: 3,
      name: "MARIA RODRIGUEZ, SMALL BUSINESS OWNER.",
      description:
        "As a small business owner, I was struggling to keep up with the ever-evolving digital landscape. Blazeskills provided me with the tools and knowledge I needed to level up my digital skills and improve my business operations. I am impressed by the quality of the courses, and the support from the instructors has been invaluable. I highly recommend Blazeskills to anyone looking to grow their digital capabilities.",
      image: "https://blazeskills.com/media/images/testimonials/person_3.jpg",
    },
  ];

  return (
    <div className="head">
      <br />
      <div className="headerdiv">
        <p>TESTIMONIALS</p>
      </div>
      <h1>
        What Our <span>Clients</span> Say About <span>Us</span>
      </h1>
      <div className="profile-slider-container">
        {profiles.map((profile) => (
          <div key={profile.id} className="profile-card">
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
    </div>
  );
};
export default ProfileSlider;
