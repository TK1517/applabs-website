import React from "react";
import "./Projects.css";
import { FaAlignCenter } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects-section" className="projects-section">
      <h1 id="heading" className="showcase-title" >
         Projects and <span>Events</span>
      </h1>
      <div className="project-container">
        

        {/* LEFT SIDE - TEXT */}
        <div className="project-text">
          <h2>Revent</h2>
          <p>
            A powerful Event management system with smooth navigation
            and many more features.
          </p>
        </div>

        {/* RIGHT SIDE - IMAGES */}
        <div className="project-images">
          <div className="image-wrapper">
            <img
              src="app4.jpeg"
              alt="Revent Screenshot 1"
              className="project-image"
            />
          </div>

          <div className="image-wrapper">
            <img
              src="app1.jpeg"
              alt="Revent Screenshot 2"
              className="project-image"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;