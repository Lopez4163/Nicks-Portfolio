import React from 'react'
import '../Styling/RightSide.css'
import About from "./About.jsx";
import WorkExperience from "./WorkExperience.jsx";
import Education from "./Education.jsx";
import Projects from "./Projects.jsx";
import Certificate from './Certificate.jsx';

const RightSide = () => {
    return (
        <div className='rightside-container'>
            <section id="about"><About /></section>
            <section id="education"><Education /></section>
            <section id="certificate"><Certificate/></section>
            <section id="experience"><WorkExperience /></section>
            <section id="projects"><Projects /></section>
        </div>
    )
}
export default RightSide
