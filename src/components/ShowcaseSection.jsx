import React from "react";
import "./ShowcaseSection.css";

const ShowcaseSection = () => {
  return (
    <section id="showcase" className="showcase">
      <h1 className="showcase-title">
        Building Innovative <span>Digital Experiences</span>
      </h1>

      <div className="showcase-images">
        <img src="/app1.jpeg" alt="App 1" className="side-img left" />
        <img src="/app2.jpeg" alt="App 2" className="main-img" />
        <img src="/app3.jpeg" alt="App 3" className="side-img right" />
      </div>

      <p className="showcase-desc">
        APPLABS transforms ideas into powerful applications.
        Build, scale, and innovate across platforms with confidence.
      </p>
    </section>
  );
};

export default ShowcaseSection;