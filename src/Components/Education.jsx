import React from "react";
import "../Styling/Education.css";

const Education = () => {
  return (
    <div className="education-container">
      <span className="title">
        <h4>Education</h4>
      </span>
      <div className="wrapper">
        <section className="education-section">
          <div className="education-block">
            <div className="edu-block">
              <span className="institution-title">
                New York City College Of Technology
              </span>
              <span>Bachelors in Technology - Computer Systems</span>
              <span className="years-attend">2019-Present</span>
            </div>
            <div className="edu-block">
              <span className="institution-title">Full Stack Academy</span>
              <span>Web Developmen Course - Certification </span>

              <span className="years-attend">2023-2024</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Education;
