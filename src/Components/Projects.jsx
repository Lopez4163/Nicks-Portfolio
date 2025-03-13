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

const projects = [
  {
    title: "MatKings",
    image: dojoGif,
    link: "https://github.com/datafaust/bjj-app",
    summary: "COMING SOON.....",
    techStack: ["React", "JavaScript", "HTML", "CSS", "Python", "Django"],
  },
  {
    title: "Niche Nest",
    image: nicheNest,
    link: "https://github.com/Lopez4163/NicheNest",
    summary: [
      "I worked on a project called Niche Nest, a freelancing website that allows users to browse and book services from freelancers, as well as become freelancers and advertise their services.",
      "The front end, developed with React and Tailwind CSS, offers a visually dynamic user experience. On the backend, Node.js, PostgreSQL, and Prisma ORM power the application, enabling users to input, store, and retrieve service details through a REST API.",
    ],
    techStack: ["React", "JavaScript", "HTML", "Tailwind", "Node", "Prisma"],
  },
  {
    title: "UFC Fighter Library",
    image: ufcGif,
    link: "https://lopez4163.github.io/ufcApp/",
    summary: [
      "Utilizes Puppeteer for robust web scraping, creating a JSON-based fighter database by extracting and structuring data from the official UFC website.",
      "Orchestrates a responsive React front end with dynamic UI features, including a feature-rich navbar, search functionality, and interactive Fighter Card Display, ensuring an engaging user experience.",
    ],
    techStack: ["React", "JavaScript", "HTML", "CSS", "Node", "Puppeteer"],
  },
  {
    title: "Storage Database",
    image: storageGif,
    link: "https://lopez4163.github.io/storageApp2.0/",
    summary: [
      "Crafted a dynamic storage app with Vite, React, CSS, and Node.js, featuring animated styling for an engaging user experience.",
      "Allows users to input and manage item details, stored in a MySQL database through a REST API, providing seamless interaction and editing capabilities for stored data.",
    ],
    techStack: ["React", "JavaScript", "HTML", "CSS", "Node", "Puppeteer"],
  },
  {
    title: "Crypto Market Watch",
    image: CryptoScam,
    summary: [
      "Developed using Python, Flask, and BeautifulSoup4 to provide live updates from Coinbase with automatic page refresh for accurate currency data.",
    ],
    techStack: ["Python", "Flask", "BeautifulSoup4"],
  },
];

const Projects = () => {
  return (
    <div className="project-container">
      <span className="title">
        <h4>Projects</h4>
      </span>
      {projects.map((project, index) => (
        <section className="project" key={index}>
          <div className="project-wrapper">
            <div className="image-wrapper">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img src={project.image} className="project-image" alt={project.title} />
                </a>
              ) : (
                <img src={project.image} className="project-image" alt={project.title} />
              )}
            </div>
            <div className="project-details">
              <h4 className="project-title">{project.title}</h4>
              <span className="project-summary">
                {Array.isArray(project.summary) ? (
                  <ul>
                    {project.summary.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  project.summary
                )}
              </span>
              <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Projects;
