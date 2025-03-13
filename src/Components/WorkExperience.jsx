import React from "react";
import "../Styling/WorkExperience.css";
import egaLogo from "../assets/usmclogo.png";
import convLogo from "../assets/convLogo.png";
import metsLogo from "../assets/metslogo.webp";

const workExperienceData = [
  {
    date: "2014-2019",
    org: "United States Marine Corps",
    title: "Mobile Facility Technician",
    summary: [
      "Specialized in ISO container and Mobile Facility maintenance, ensuring their optimal operational status.",
      "Led a team of 20 Marines, emphasizing precision and safety in all operational aspects as a Collateral Duty Inspector.",
      "Applied advanced technical skills and a keen eye for detail to effectively identify and address issues in maintenance and repair operations.",
    ],
    skills: ["Team Work", "Project Management", "Leadership and Mentorship"],
    logo: egaLogo,
  },
  {
    date: "2019-2023",
    org: "Converse Inc.",
    title: "Lead Sales Associate",
    summary: [
      "Provided customer assistance, operated the cash register, and efficiently organized the stockroom as a Sales Associate.",
      "Enhanced communication and organizational skills in a fast-paced retail setting and excelled in training new employees.",
    ],
    skills: ["Customer Service", "Sales Training", "Stock Room Operations"],
    logo: convLogo, // No logo for this one
  },
  {
    date: "2023-2024",
    org: "FaustCorp",
    title: "Web Developer",
    summary: [
      "Engineered and maintained dynamic React.js applications, implemented new features, architected Node.js servers, and developed RESTful APIs for seamless integrations.",
      "Managed Stripe payment integrations, optimized user experience, and collaborated with cross-functional teams to ensure secure, scalable solutions aligned with project goals.",
    ],
    skills: ["Team Work", "Frontend/Backend Development", "Servicing Clients"],
    logo: null, // No logo for this one
  },
  {
    date: "2024-Present",
    org: "Mets",
    title: "Event Staff",
    summary: [
      " Work around professional athletes and celebrities, ensuring their needs are met with professionalism and discretion.",
      "Anticipate and accommodate specific requests from athletes and high-profile individuals during events."
  ],
    skills: ["Event Planing", "Concierge", "Logistics"],
    logo: metsLogo, // No logo for this one
  },
];

const WorkExperience = () => {
  return (
    <div className="workexpereince-container">
      <span className="title">
        <h4>Experience</h4>
      </span>
      <section className="experience-section">
        {workExperienceData.map((job, index) => (
          <div key={index} className="job">
            <div className="work-date">
              <div>
                <p className="date-employ">{job.date}</p>
              </div>
              {job.logo && (
                <div className="image-container">
                  <img src={job.logo} alt={`${job.org} logo`} className="work-img" />
                </div>
              )}
            </div>
            <div className="job-details">
              <span className="job-org">{job.org}</span>
              <span className="job-title">{job.title}</span>
              <ul className="job-summary">
                {job.summary.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <div className="job-skills">
                {job.skills.map((skill, idx) => (
                  <span key={idx} className="tech">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default WorkExperience;
