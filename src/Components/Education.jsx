import React from 'react'
import '../Styling/Education.css'

const Education = () => {
    return (
        <div className='education-container'>
            <span className='title'><h4>Education</h4></span>

            <div className='wrapper'>
                <section className='education-section'>
                <div className='education-block'>
                    <span>Queens College</span>
                    <span>BA Computer Science</span>
                    <span>2019-Present</span>
                </div>
                <div className='education-block'>
                    <span>Full Stack Web Development Course</span>
                    <span>2023-2024</span>
                </div>
            </section>
            </div>
        </div>
    )
}
export default Education
