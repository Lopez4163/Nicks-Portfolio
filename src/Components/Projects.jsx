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
                        <h4>Dojo Website</h4>
                        <span className='project-summary'>
                            COMING SOON.....
                        </span>
                        <div className='tech-stack'>
                        <span className='tech'>React</span>
                        <span className='tech'>JavaScript</span>
                        <span className='tech'>HTML</span>
                        <span className='tech'>CSS</span>
                        <span className='tech'>Node</span>
                        <span className='tech'>Puppeteer</span>
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
                        <h4>UFC Fighter Library</h4>
                        <span className='project-summary'>
                            Implemented web scraping with Puppeteer for data extraction from the UFC website, creating a JSON-based fighter database. Developed a responsive React front end with state management using React hooks. Designed a feature-rich navbar for enhanced user navigation and search capabilities. Engineered a subscription mechanism with Node.js for automated email confirmations. Created an interactive Fighter Card Display component for an engaging user experience, ensuring cross-browser compatibility and responsiveness. Delivered an immersive platform showcasing the UFC fighter roster through a dynamic interface, enhancing user engagement.
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
                        <h4>Storage Database</h4>
                        <span className='project-summary'>
                            Crafted an interactive storage app using Vite, React, CSS, and Node.js with MySQL. Features animated styling for a dynamic user experience. Users input item details stored in a MySQL database via a REST API. The engaging front-end interface allows seamless interaction and editing of stored data. Resulting in a functional and visually appealing storage application.
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
                        <h4>Crypto Market Watch</h4>
                        <span className='project-summary'>
                           Developed a dynamic cryptocurrency tracking app using Python, Flask, and BeautifulSoup4.
                            Real-time updates: Leveraged Flask to provide live cryptocurrency prices from Coinbase.
                            Web scraping: Used BeautifulSoup4 for accurate extraction of up-to-date coin prices.
                            Automatic page refresh: Implemented for currency data accuracy upon each page load.
                            Cloud hosting: Hosted on AWS EC2 for seamless accessibility and reliability.
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
