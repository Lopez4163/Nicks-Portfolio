import React from 'react'
import '../Styling/WorkExperience.css'

const WorkExperience = () => {
    return (
        <div className='workexpereince-container'>
            <span className='title'><h4>Experience</h4></span>
            <section className='experience-section'>
                <div className='job'>
                    <div className='work-date'>2015-2020</div>
                    <div className='job-details'>
                        <span className='job-org'>United States Marine Corps</span>
                        <span className='job-title'>Mobile Facility Technician</span>
                        <span className='job-summary'>
                            As a Mobile Facility Technician, I specialize in maintaining and repairing ISO containers and Mobile Facilities. In my role as a Collateral Duty Inspector, I supervise a team of 20 Marines, emphasizing precision and safety. My technical proficiency has honed my keen eye for detail.
                        </span>
                        <span className='job-skills'>
                            <span className='tech'>Team Work</span>
                            <span className='tech'>Project Management</span>
                            <span className='tech'>Grit</span>
                        </span>
                    </div>
                </div>
                <div className='job'>
                    <div className='work-date'>2019-2023</div>
                    <div className='job-details'>
                        <span className='job-org'>Converse Inc.</span>
                        <span className='job-title'>Lead Sales Associate</span>
                        <span className='job-summary'>
                            As a Sales Associate, I provided customer assistance, operated the cash register, and organized the stockroom efficiently. This enhanced my communication and organizational skills in a fast-paced retail setting. I also excelled in training new employees.
                        </span>
                        <span className='job-skills'>
                            <span className='tech'>Team Work</span>
                            <span className='tech'>Project Management</span>
                            <span className='tech'>Grit</span>
                        </span>
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
    )
}
export default WorkExperience
