import React from "react";
import "../style.css";

const About = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <h1>Kendall Burkett</h1>
      </header>

      {/* About Me and Skills Side-by-Side */}
      <section id="about-skills">
        <div className="about-container">
          <h2>Who I Am</h2>
          <p className="indented">
            Hi, I’m Kendall Burkett, a dynamic developer, data analyst, and
            leader with a proven track record of success across diverse
            industries. My journey has been shaped by years of experience in
            data analytics, machine learning, development, and leadership roles
            that required adaptability, innovation, and a dedication to
            excellence.
          </p>
          <p className="indented">
            In my recent role as a Senior Account Executive at AtmosphereTV, I
            generated over $6.5M in revenue and acquired 1,700+ clients by
            leveraging data-driven strategies and innovative outreach.
          </p>
          <p className="indented">
            During the Covid-19 pandemic, I pivoted to freelance web
            development, where I built and maintained custom web applications
            for clients. This experience deepened my technical expertise,
            strengthened my client collaboration skills, and reaffirmed my
            passion for creating impactful solutions.
          </p>
          <p className="indented">
            Previously, I honed my technical and customer service skills as a
            Geek Squad Technician, providing comprehensive hardware, software,
            and connectivity support to clients in-store and in their homes.
            This role reinforced my problem-solving abilities and allowed me to
            educate clients on how to maximize the value of their technology.
          </p>
          <p className="indented">
            As a salesman for Cowboy Harley-Davidson, I developed exceptional
            customer engagement and sales skills, building lasting
            relationships and earning opportunities to represent the brand at
            national events.
          </p>
          <p className="indented">
            My career began with service in the United States Marine Corps,
            where I completed two deployments to Iraq and one to Afghanistan.
            As a Corporal of Marines, I managed complex operations under
            high-pressure conditions, balancing mission objectives with
            cultural respect and collaboration.
          </p>
          <p className="indented">
            Whether analyzing data, developing innovative solutions, or leading
            a team, I bring a strong foundation of technical expertise,
            strategic thinking, and a passion for continuous growth.
          </p>
          <p className="indented">
            I'm highly skilled in Python, SQL, data visualization tools (like
            Tableau), and React. Explore this site to learn more about my
            journey and accomplishments.
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
          <div className="skill-card">
            <h3>Leadership & Collaboration</h3>
            <p>Team Management & Mentorship</p>
            <p>Cross-Functional Collaboration</p>
          </div>
          <div className="skill-card">
            <h3>Problem-Solving</h3>
            <p>Fit/Gap Analysis</p>
            <p>Root Cause Analysis</p>
            <p>Critical Thinking & Creativity</p>
          </div>
        </div>
      </section>

      {/* Work History Section */}
      <section id="timeline">
        <h2>Work History</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Senior Account Executive - AtmosphereTV (Chive Media Group)</h3>
            <p>
              <strong>2021–2023:</strong> Achieved $6.5M+ in revenue and
              acquired 1,700+ clients by utilizing data-driven strategies and
              innovative outreach. Consistently exceeded targets, earning
              multiple promotions while leading team initiatives, improving
              onboarding, and refining sales tactics to penetrate new markets.
            </p>
          </div>
          <div className="timeline-item">
            <h3>Freelance Developer</h3>
            <p>
              <strong>2020–2021:</strong> Leveraged technical expertise to
              freelance as a web developer during the pandemic, building and
              maintaining custom web applications for clients. This experience
              expanded my skills in web development and client collaboration.
            </p>
          </div>
          <div className="timeline-item">
            <h3>Geek Squad Technician</h3>
            <p>
              <strong>2015–2021:</strong> Provided technical support both
              in-store and in clients' homes, troubleshooting and repairing
              hardware, software, and connectivity issues. Educated clients on
              maximizing their technology, developing strong customer service
              and problem-solving skills.
            </p>
          </div>
          <div className="timeline-item">
            <h3>Salesman - Cowboy Harley-Davidson</h3>
            <p>
              <strong>2011–2015:</strong> Excelled in personalized customer
              outreach, earning invitations to sell at events nationwide.
              Strengthened sales expertise and customer engagement skills while
              representing a globally recognized brand.
            </p>
          </div>
          <div className="timeline-item">
            <h3>Military Service - USMC</h3>
            <p>
              <strong>2006–2010:</strong> Served with distinction during two
              deployments to Iraq and one to Afghanistan, managing complex
              operations in dynamic and high-pressure environments. As a
              Corporal of Marines, I was entrusted with significant
              decision-making responsibilities to ensure mission success while
              fostering respectful relationships with local communities and
              adhering to military and cultural customs. These experiences
              honed my leadership, adaptability, and problem-solving abilities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="contact-container">
          <h2>Contact</h2>
          <p>
            If you’d like to get in touch, feel free to reach out via email or
            connect with me on LinkedIn.
          </p>
          <div className="contact-links">
            <a href="mailto:kendall.burkett@gmail.com" target="_blank">
              <img
                src="icons/gmail-logo.png"
                alt="Gmail Logo"
                className="contact-icon"
              />{" "}
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/kendallburkett/"
              target="_blank"
            >
              <img
                src="icons/linkedin-logo.png"
                alt="LinkedIn Logo"
                className="contact-icon"
              />{" "}
              LinkedIn
            </a>
            <a
              href="https://github.com/kendallburkett"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="icons/github-logo.png"
                alt="GitHub Logo"
                className="contact-icon"
              />{" "}
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Kendall Burkett. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;