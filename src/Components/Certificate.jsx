import React from 'react';
import comptiaA from "../assets/comptiaA+.png";
import ccpLogo from "../assets/awsccpBage.png";
import "../Styling/certificate.css";

const certificateData = [
  {
    certifying: "Amazon Web Services",
    certificate: "AWS Certified Cloud Practitioner",
    year: "2024",
    logo: ccpLogo, 
  },
  {
    certifying: "Comptia",
    certificate: "Comptia A+",
    year: "In Progress",
    logo: comptiaA,
  },
];

const Certificate = () => {
  return (
    <div className="education-container">
      <span className="title">
        <h4>Certificates</h4>
      </span>
      <div className="wrapper">
        <section className="education-section">
          <div className="education-block">
            {certificateData.map((cert, index) => (
              <div key={index} className="edu-block">
                <span className="institution-title">{cert.certifying}</span>
                <span>{cert.certificate}</span>
                <span className="years-attend">{cert.year}</span>
                <div>
                  <img src={cert.logo} className="edu-img" alt={`${cert.certifying} logo`} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certificate;
