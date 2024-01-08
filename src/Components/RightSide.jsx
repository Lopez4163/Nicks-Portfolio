import React from 'react'
import '../Styling/RightSide.css'
import About from "./About.jsx";
import WorkExperience from "./WorkExperience.jsx";
const RightSide = () => {
    return (
        <div className='rightside-container'>
            <section className='about'>
                <About/>
            </section>
            <section className='workexperience'>
                <WorkExperience/>
            </section>
        </div>
    )
}
export default RightSide
