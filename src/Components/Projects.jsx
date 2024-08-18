import React from "react";
import "../Styling/Projects.css";
import CryptoScam from "../assets/CryptoScam.png";
import StorageApp from "../assets/StorageApp.png";
import UFCApp from "../assets/UFCApp.png";
import DojoApp from "../assets/DojoApp.png";
import storageGif from "../assets/storage-gif.gif";
import ufcGif from "../assets/ufc-gif.gif";
import dojoGif from "../assets/dojo-gif.gif";
import nicheNest from "../assets/nicheNest.gif";
const Projects = () => {
  return (
    <div className="project-container">
      <span className="title">
        <h4>Projects</h4>
      </span>
      <section className="project">
        <div className="project-wrapper">
          <div className="image-wrapper">
            <a href="https://github.com/datafaust/bjj-app" target="_blank">
              <img src={dojoGif} className="project-image" />
            </a>
          </div>
          <div className="project-details">
            <h4 className="project-title">MatKings</h4>
            <span className="project-summary">COMING SOON.....</span>
            <div className="tech-stack">
              <span className="tech">React</span>
              <span className="tech">JavaScript</span>
              <span className="tech">HTML</span>
              <span className="tech">CSS</span>
              <span className="tech">Python</span>
              <span className="tech">Django</span>
            </div>
          </div>
        </div>
      </section>
      <section className="project">
        <div className="project-wrapper">
          <div className="image-wrapper">
            <a href="https://github.com/Lopez4163/NicheNest" target="_blank">
              <img src={nicheNest} className="project-image" />
            </a>
          </div>
          <div className="project-details">
            <h4 className="project-title">Niche Nest</h4>
            <span className="project-summary">
              <ul>
                <li>
                  I worked on a project called Niche Nest, a freelancing website
                  that allows users to browse and book services from
                  freelancers, as well as become freelancers and advertise their
                  services.
                </li>
                <li>
                  The front end, developed with React and Tailwind CSS, offers a
                  visually dynamic user experience. On the backend, Node.js,
                  PostgreSQL, and Prisma ORM power the application, enabling
                  users to input, store, and retrieve service details through a
                  REST API.
                </li>
              </ul>
            </span>
            <div className="tech-stack">
              <span className="tech">React</span>
              <span className="tech">JavaScript</span>
              <span className="tech">HTML</span>
              <span className="tech">Tailwind</span>
              <span className="tech">Node</span>
              <span className="tech">Prisma</span>
            </div>
            <div className="github-link"></div>
          </div>
        </div>
      </section>
      <section className="project">
        <div className="project-wrapper">
          <div className="image-wrapper">
            <a href="https://lopez4163.github.io/ufcApp/">
              <img src={ufcGif} className="project-image" />
            </a>
          </div>
          <div className="project-details">
            <h4 className="project-title">UFC Fighter Library</h4>
            <span className="project-summary">
              <ul>
                <li>
                  Utilizes Puppeteer for robust web scraping, creating a
                  JSON-based fighter database by extracting and structuring data
                  from the official UFC website.
                </li>
                <li>
                  Orchestrates a responsive React front end with dynamic UI
                  features, including a feature-rich navbar, search
                  functionality, and interactive Fighter Card Display, ensuring
                  an engaging user experience.
                </li>
              </ul>
            </span>
            <span className="tech-stack">
              <span className="tech">React</span>
              <span className="tech">JavaScript</span>
              <span className="tech">HTML</span>
              <span className="tech">CSS</span>
              <span className="tech">Node</span>
              <span className="tech">Puppeteer</span>
            </span>
          </div>
        </div>
      </section>
      <section className="project">
        <div className="project-wrapper">
          <div className="image-wrapper">
            <a href="https://lopez4163.github.io/storageApp2.0/">
              <img src={storageGif} className="project-image" />
            </a>
          </div>
          <div className="project-details">
            <h4 className="project-title">Storage Database</h4>
            <span className="project-summary">
              <ul>
                <li>
                  Crafted a dynamic storage app with Vite, React, CSS, and
                  Node.js, featuring animated styling for an engaging user
                  experience.
                </li>
                <li>
                  Allows users to input and manage item details, stored in a
                  MySQL database through a REST API, providing seamless
                  interaction and editing capabilities for stored data.
                </li>
              </ul>
            </span>
            <span className="tech-stack">
              <span className="tech">React</span>
              <span className="tech">JavaScript</span>
              <span className="tech">HTML</span>
              <span className="tech">CSS</span>
              <span className="tech">Node</span>
              <span className="tech">Puppeteer</span>
            </span>
          </div>
        </div>
      </section>
      <section className="project">
        <div className="project-wrapper">
          <span className="image-wrapper">
            <img src={CryptoScam} className="project-image" />
          </span>
          <div className="project-details">
            <h4 className="project-title">Crypto Market Watch</h4>
            <span className="project-summary">
              <ul>
                <li>
                  Developed using Python, Flask, and BeautifulSoup4 to provide
                  live updates from Coinbase with automatic page refresh for
                  accurate currency data.
                </li>
                <li>
                  Developed using Python, Flask, and BeautifulSoup4 to provide
                  live updates from Coinbase with automatic page refresh for
                  accurate currency data.
                </li>
              </ul>
            </span>
            <span className="tech-stack">
              <span className="tech">React</span>
              <span className="tech">JavaScript</span>
              <span className="tech">HTML</span>
              <span className="tech">CSS</span>
              <span className="tech">Node</span>
              <span className="tech">Puppeteer</span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Projects;
