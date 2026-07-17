import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeFilter, setActiveFilter] = useState("All");

  const profileName = "Mahnoor";
  const profileTitle = "Creative Designer & Innovator";

  const filters = ["All", "Product Design", "Graphic", "Art Direction"];

  const projects = [
    { title: "Project Alpha", category: "Product Design", desc: "A comprehensive digital solution aimed at streamlining user workflows and improving retention." },
    { title: "Project Beta", category: "Graphic", desc: "Brand identity development including typography, color palettes, and marketing collateral design." },
    { title: "Project Gamma", category: "Art Direction", desc: "Conceptual direction and visual strategy for a premium lifestyle and fashion campaign." },
    { title: "Project Delta", category: "Product Design", desc: "An intuitive mobile app interface crafted specifically to optimize e-commerce checkout paths." },
    { title: "Project Epsilon", category: "Art Direction", desc: "Curating end-to-end user experiences and aesthetic guidelines across multi-channel platforms." },
    { title: "Project Zeta", category: "Graphic", desc: "Minimalist poster designs and visual assets for tech conferences and digital corporate events." },
  ];

  const filteredProjects = activeFilter === "All" ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div className="portfolio-template">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo"><h1>{profileName}.</h1></div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#design-philosophy">Design Philosophy</a>
          <a href="#design-gallery">Design Gallery</a>
          <a href="#contact" className="contact-btn">Get In Touch</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-container">
          <h2 className="hero-headline">{profileTitle}</h2>
          <p className="hero-subtext">Creating impactful experiences through intuitive design and text-driven technology structures.</p>
          <div className="hero-btns">
            <a href="#design-gallery" className="hero-btn-primary">View Projects</a>
            <a href="#contact" className="hero-btn-secondary">Contact Me</a>
          </div>
        </div>
      </header>

      {/* Design Philosophy Section */}
      <section id="design-philosophy" className="philosophy-section">
        <h3>Design Philosophy</h3>
        <p className="philosophy-subtext">My core principles to creating functional art and seamless text interfaces.</p>
        <div className="philosophy-grid">
          {["User-Centric", "Clean", "Intuitive", "Functional"].map((text, index) => (
            <div className="philosophy-card" key={index}>
              <div className="step-badge">Step 0{index + 1}</div>
              <h4>{text}</h4>
              <p>Designing with absolute empathy and clarity. Prioritizing layout structure, clean alignments, and seamless content interaction.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Design Gallery (Now Projects Text Gallery) */}
      <section id="design-gallery" className="gallery-section">
        <div className="gallery-header">
          <h3>Project Gallery</h3>
          <p className="gallery-subtext">Explore my recent conceptual case studies and designs.</p>
        </div>
        
        {/* Gallery Filters */}
        <div className="gallery-filters">
          {filters.map((filter) => (
            <button key={filter} className={`filter-btn ${activeFilter === filter ? "active" : ""}`} onClick={() => setActiveFilter(filter)}>
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid (Text Cards, No Images) */}
        <div className="gallery-grid">
          {filteredProjects.map((project, index) => (
            <div className="gallery-item-text-card" key={index}>
              <div className="card-category">{project.category}</div>
              <h4>{project.title}</h4>
              <p>{project.desc}</p>
              <span className="read-more">Learn more →</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="footer-top">
          <div className="footer-logo"><h1>{profileName}.</h1></div>
          <div className="footer-links">
            <a href="https://linkedin.com">LinkedIn</a>
            <a href="https://github.com">GitHub</a>
            <a href="https://dribbble.com">Dribbble</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 {profileName}. All rights reserved.</p>
          <p>Driven by pure typography and code layout.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;