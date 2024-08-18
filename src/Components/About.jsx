import React from "react";
import "../Styling/About.css";

const About = () => {
  return (
    <div className="about-container">
      <span className="title">
        <h4>About</h4>
      </span>
      <section className="about-section">
        <span className="about-text">
          During my time in the Marine Corps, I discovered my passion for
          technology and building innovative solutions. This realization
          inspired me to take a leap into the tech world, ultimately leading me
          to a fulfilling career as a Developer
        </span>
      </section>
      <section className="about-section">
        <span className="about-text">
          I specialize in bringing ideas to life, leveraging a wide range of
          tools and technologies to turn possibilities into reality. With time
          and determination, anything is achievable.
        </span>
      </section>
      <section className="about-section">
        <span className="">
          Expert in Vite React, JavaScript, and Tailwind CSS for creating
          responsive user interfaces. Builds scalable backends using Python,
        </span>
        <span className="about-text">
          Node.js, and REST APIs. Knows how to deploy on hosting platforms such
          as AWS, Azure, and Netlify. Proficient in Express.js and Postman for
          seamless front-to-backend communication.
        </span>
        <span className="">
          Thrives in collaborative environments and quickly adapts to new
          technologies.
        </span>
      </section>
    </div>
  );
};
export default About;
