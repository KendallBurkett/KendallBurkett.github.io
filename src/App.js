import React from "react";
import "./index.css";
import githubLogo from "./images/github-logo.png";
import gmailLogo from "./images/gmail-logo.png";
import linkedinLogo from "./images/linkedin-logo.png";
import safariLogo from "./images/safari-logo.png";

function App() {
  return (
    <div>
      {/* Header Section */}
      <header>
        <h1>Kendall Burkett</h1>
        <nav>
          <ul>
            <li><a href="#about-skills">About & Skills</a></li>
            <li><a href="#timeline">Timeline</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* About & Skills Section */}
      <section id="about-skills">
        <div className="about-container">
          <h2>Who I Am</h2>
          <p>
            Hi, I’m Kendall Burkett, a dynamic developer, data analyst, and leader with a proven track record of success across diverse industries. My journey has been shaped by years of experience in data analytics, machine learning, development, and leadership roles that required adaptability, innovation, and a dedication to excellence.
          </p>
        </div>
        <div className="skills-container">
          <h2>Skills & Expertise</h2>
          <div className="skill-card">
            <h3>Programming</h3>
            <p>Proficient: Python, JavaScript, SQL</p>
            <p>Familiar: C++, Java</p>
          </div>
          <div className="skill-card">
            <h3>Data Analytics</h3>
            <p>Tools: Tableau, Power BI, MongoDB, PostgreSQL</p>
            <p>Techniques: Statistical Modeling, Machine Learning, A/B Testing</p>
          </div>
          <div className="skill-card">
            <h3>Development</h3>
            <p>Front-End: React, HTML, CSS, Bootstrap</p>
            <p>Back-End: Flask, Node.js, APIs</p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline">
        <h2>Work History</h2>
        <div className="timeline-item">
          <h3>Senior Account Executive - AtmosphereTV</h3>
          <p>
            Achieved $6.5M+ in revenue and acquired 1,700+ clients by utilizing data-driven strategies and innovative outreach.
          </p>
        </div>
        <div className="timeline-item">
          <h3>Freelance Developer</h3>
          <p>
            Built and maintained custom web applications for clients during the pandemic, expanding my technical expertise.
          </p>
        </div>
        <div className="timeline-item">
          <h3>Geek Squad Technician</h3>
          <p>
            Provided comprehensive hardware, software, and connectivity support, reinforcing my problem-solving abilities.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <h2>Portfolio</h2>
        <p>Check out my projects!</p>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="contact-container">
          <h2>Contact</h2>
          <p>If you’d like to get in touch, feel free to reach out via email or connect with me on LinkedIn.</p>
          <div className="contact-links">
            <a href="https://github.com/kendallburkett" target="_blank" rel="noreferrer">
              <img src={githubLogo} alt="GitHub" /> GitHub
            </a>
            <a href="mailto:kendall.burkett@example.com" target="_blank" rel="noreferrer">
              <img src={gmailLogo} alt="Email" /> Email
            </a>
            <a href="https://linkedin.com/in/kendallburkett" target="_blank" rel="noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" /> LinkedIn
            </a>
            <a href="https://kendallburkett.github.io" target="_blank" rel="noreferrer">
              <img src={safariLogo} alt="Website" /> Website
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Kendall Burkett. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;