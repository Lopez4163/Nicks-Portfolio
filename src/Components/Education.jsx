import React from "react";
import "../Styling/Education.css";
import NYCCTlogo from '../assets/NYCCTlogo.png'
import fullstacklogo from '../assets/fullstacklogo.png'

const educationData = [
  {
    institution: "New York City College Of Technology",
    degree: "Bachelors in Technology - Computer Systems",
    years: "2019-Present",
    logo: NYCCTlogo,
  },
  {
    institution: "Full Stack Academy",
    degree: "Web Development Course",
    years: "2023-2023",
    logo: fullstacklogo,
  },
];

const Education = () => {
  return (
    <div className="education-container">
      <span className="title">
        <h4>Education</h4>
      </span>
      <div className="wrapper">
        <section className="education-section">
          <div className="education-block">
            {educationData.map((edu, index) => (
              <div key={index} className="edu-block">
                <span className="institution-title">{edu.institution}</span>
                <span>{edu.degree}</span>
                <span className="years-attend">{edu.years}</span>
                <div>
                  <img src={edu.logo} className="edu-img" alt={`${edu.institution} logo`} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education;
