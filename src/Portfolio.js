import React from "react";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <header>
        <h1>Portfolio</h1>
      </header>
      <section id="assignments">
        <h2>Assignments</h2>
        <p>Here are some of the assignments I've worked on:</p>
        <ul>
          <li>
            <a
              href="https://github.com/KendallBurkett/UT_Matplotlib__Data_Visualization"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository 1
            </a>
          </li>
          <li>
            <a
              href="https://github.com/KendallBurkett/UT_Web_Scraping"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository 2
            </a>
          </li>
          <li>
            <a
              href="https://github.com/KendallBurkett/UT_Python_API"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository 3
            </a>
          </li>
        </ul>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <p>Some of the projects I've completed:</p>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      </section>
      <section id="personal-interests">
        <h2>Personal Interests</h2>
        <p>
          When I'm not working, I enjoy exploring technology, reading, and
          outdoor adventures.
        </p>
      </section>
    </div>
  );
}

export default Portfolio;