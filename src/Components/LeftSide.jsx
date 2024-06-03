import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import "../Components/RightSide.jsx"
import "../Styling/LeftSide.css"
const LeftSide = () => {
  useEffect(() => {
    const defaultAnchor = document.getElementById("defaultAnchor")
    if (defaultAnchor) {
      defaultAnchor.click()
    }
  }, [])
  return (
    <div className="leftside-container">
      <section className="who-am-i-container">
        <div className="who-am-i">
          <h1 className="name">Nicholas Lopez</h1>
          <h2 className="role">Web Developer</h2>
          <h4 className="quote">
            Passionate about coding, I enjoy crafting digital solutions with
            creativity. Committed to perpetual growth, I thrive in the
            ever-evolving landscape of technology, always eager to learn and
            adapt.
          </h4>
        </div>
      </section>
      <section className="index">
        <div className="index-anchors">
          <h4>
            <a href="#about" className="shortcut">
              About
            </a>
          </h4>
          <h4>
            <a href="#education" className="shortcut">
              Education
            </a>
          </h4>
          <h4>
            <a href="#experience" className="shortcut">
              Experience
            </a>
          </h4>
          <h4>
            <a href="#projects" className="shortcut" id="defaultAnchor">
              Projects
            </a>
          </h4>
        </div>
      </section>
      <section className="social-links">
        <div className="social-links-icons">
          <a href="https://github.com/Lopez4163" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="www.linkedin.com/in/nicholas-lopez-83b031299"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/nickk_adre/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </section>
    </div>
  )
}
export default LeftSide
