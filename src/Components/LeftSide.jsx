import React from 'react'
import '../Styling/LeftSide.css'
const LeftSide = () => {
    return (
        <div className='leftside-container'>
            <section className='who-am-i-container'>
                <div className='who-am-i'>
                    <h1>Nicholas Andres Lopez</h1>
                    <h3>React Developer</h3>
                    <h4>Passionate about coding, I enjoy crafting digital solutions with creativity. Committed to perpetual growth, I thrive in the ever-evolving landscape of technology, always eager to learn and adapt.
                    </h4>
                </div>
            </section>
            <section className='index'>
                <div className='index-anchors'>
                    <a>About</a>
                    <a>Education</a>
                    <a>Experience</a>
                    <a>Projects</a>
                </div>
            </section>
            <section className='social-links'>
                <div className='social-links-icons'>
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </section>
        </div>
    )
}
export default LeftSide
