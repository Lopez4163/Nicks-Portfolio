import React from "react";
import "../Styling/WorkExperience.css";

const WorkExperience = () => {
  return (
    <div className="workexpereince-container">
      <span className="title">
        <h4>Experience</h4>
      </span>
      <section className="experience-section">
        <div className="job">
          <div className="work-date">2014-2019</div>
          <div className="job-details">
            <span className="job-org">United States Marine Corps</span>
            <span className="job-title">Mobile Facility Technician</span>
            <ul className="job-summary">
              <li>
                Specialized in ISO container and Mobile Facility maintenance,
                ensuring their optimal operational status.
              </li>
              <li>
                Led a team of 20 Marines, emphasizing precision and safety in
                all operational aspects as a Collateral Duty Inspector.
              </li>
              <li>
                Applied advanced technical skills and a keen eye for detail to
                effectively identify and address issues in maintenance and
                repair operations.
              </li>
            </ul>
            <div className="job-skills">
              <span className="tech">Team Work</span>
              <span className="tech">Project Management</span>
              <span className="tech">LeaderShip and Mentorship</span>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="work-date">2019-2023</div>
          <div className="job-details">
            <span className="job-org">Converse Inc.</span>
            <span className="job-title">Lead Sales Associate</span>
            <ul className="job-summary">
              <li>
                Provided customer assistance, operated the cash register, and
                efficiently organized the stockroom as a Sales Associate.
              </li>
              <li>
                Enhanced communication and organizational skills in a fast-paced
                retail setting and excelled in training new employees.
              </li>
            </ul>
            <div className="job-skills">
              <span className="tech">Customer Service</span>
              <span className="tech">Sales Training</span>
              <span className="tech">Stock Room Operations</span>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="work-date">2020-Present</div>
          <div className="job-details">
            <span className="job-org">FaustCorp</span>
            <span className="job-title">Web Developer</span>
            <ul className="job-summary">
              <li>
                Engineered and maintained dynamic React.js applications,
                implemented new features, architected Node.js servers, and
                developed RESTful APIs for seamless integrations.
              </li>
              <li>
                Managed Stripe payment integrations, optimized user experience,
                and collaborated with cross-functional teams to ensure secure,
                scalable solutions aligned with project goals.
              </li>
            </ul>
            <div className="job-skills">
              <span className="tech">Team Work</span>
              <span className="tech">Frontend/Backend Development</span>
              <span className="tech">Servicing Clients</span>
            </div>
          </div>
        </div>

        {/*<div className='job'>*/}
        {/*    <div className='work-date'>2015-2020</div>*/}
        {/*    <div className='job-details'>*/}
        {/*        <span className='job-org'>United States Marine Corps</span>*/}
        {/*        <span className='job-title'>Mobile Facility Technician</span>*/}
        {/*        <span className='job-summary'>*/}
        {/*            As a Mobile Facility Technician in the Marines, my role revolves around maintaining and repairing mobile structures and equipment critical to military operations. I focus on ensuring the functionality, reliability, and safety of communication vehicles, power generators, and other specialized units. Working within a dynamic team, I perform preventive maintenance, address equipment issues promptly, and provide technical support to contribute to the overall success of missions.*/}
        {/*        </span>*/}
        {/*        <span className='job-skills'>*/}
        {/*            <span className='tech'>Team Work</span>*/}
        {/*            <span className='tech'>Project Management</span>*/}
        {/*            <span className='tech'>Grit</span>*/}
        {/*        </span>*/}
        {/*    </div>*/}
        {/*</div>*/}
      </section>
    </div>
  );
};
export default WorkExperience;
