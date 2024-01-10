import React from 'react'
import '../Styling/Projects.css'
import CryptoScam from '../assets/CryptoScam.png'
import StorageApp from '../assets/StorageApp.png'
import UFCApp from '../assets/UFCApp.png'
import DojoApp from '../assets/DojoApp.png'
const Projects = () => {
    return (
        <div className='project-container'>
            <span className='title'><h4>Projects</h4></span>
            <section className='project'>
                <div className='project-wrapper'>
                    <div className='image-wrapper'>
                        <a>
                            <img src={DojoApp} className='project-image'/>
                        </a>
                    </div>
                    <div className='project-details'>
                        <h4 className='project-title'>Dojo Website</h4>
                        <span className='project-summary'>
                            COMING SOON.....
                        </span>
                        <div className='tech-stack'>
                        <span className='tech'>React</span>
                        <span className='tech'>JavaScript</span>
                        <span className='tech'>HTML</span>
                        <span className='tech'>CSS</span>
                        <span className='tech'>Python</span>
                        <span className='tech'>Django</span>
                    </div>
                    </div>
                </div>
            </section>
            <section className='project'>
                <div className='project-wrapper'>
                    <div className='image-wrapper'>
                    <a href="https://lopez4163.github.io/ufcApp/">
                        <img src={UFCApp} className='project-image'/>
                    </a>
                    </div>
                    <div className='project-details'>
                        <h4 className='project-title'>UFC Fighter Library</h4>
                        <span className='project-summary'>
                        <ul>
                            <li>Utilizes Puppeteer for robust web scraping, creating a JSON-based fighter database by extracting and structuring data from the official UFC website.</li>
                            <li>Orchestrates a responsive React front end with dynamic UI features, including a feature-rich navbar, search functionality, and interactive Fighter Card Display, ensuring an engaging user experience.</li>
                        </ul>
                        </span>
                        <span className='tech-stack'>
                        <span className='tech'>React</span>
                        <span className='tech'>JavaScript</span>
                        <span className='tech'>HTML</span>
                        <span className='tech'>CSS</span>
                        <span className='tech'>Node</span>
                        <span className='tech'>Puppeteer</span>
                        </span>
                    </div>

                </div>
            </section>
            <section className='project'>
                <div className='project-wrapper'>
                    <div className='image-wrapper'>
                        <a href='https://lopez4163.github.io/storageApp2.0/'>
                            <img src={StorageApp} className='project-image'/>
                        </a>
                    </div>
                    <div className='project-details'>
                        <h4 className='project-title'>Storage Database</h4>
                        <span className='project-summary'>
                            <ul>
                                <li>
                                    Crafted a dynamic storage app with Vite, React, CSS, and Node.js, featuring animated styling for an engaging user experience.
                                </li>
                                <li>
                                    Allows users to input and manage item details, stored in a MySQL database through a REST API, providing seamless interaction and editing capabilities for stored data.
                                </li>
                            </ul>
                        </span>
                            <span className='tech-stack'>
                            <span className='tech'>React</span>
                            <span className='tech'>JavaScript</span>
                            <span className='tech'>HTML</span>
                            <span className='tech'>CSS</span>
                            <span className='tech'>Node</span>
                            <span className='tech'>Puppeteer</span>
                        </span>
                    </div>
                </div>
            </section>
            <section className='project'>
                <div className='project-wrapper'>
                    <a className='image-wrapper'>
                        <img src={CryptoScam} className='project-image'/>
                    </a>
                    <div className='project-details'>
                        <h4 className='project-title'>Crypto Market Watch</h4>
                        <span className='project-summary'>
                           <ul>
                                <li>
                                    Developed using Python, Flask, and BeautifulSoup4 to provide live updates from Coinbase with automatic page refresh for accurate currency data.
                                </li>
                                <li>
                                    Developed using Python, Flask, and BeautifulSoup4 to provide live updates from Coinbase with automatic page refresh for accurate currency data.
                                </li>
                            </ul>
                        </span>
                        <span className='tech-stack'>
                        <span className='tech'>React</span>
                        <span className='tech'>JavaScript</span>
                        <span className='tech'>HTML</span>
                        <span className='tech'>CSS</span>
                        <span className='tech'>Node</span>
                        <span className='tech'>Puppeteer</span>
                    </span>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Projects
