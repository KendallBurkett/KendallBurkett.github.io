import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <header>
        <h1>Kendall Burkett</h1>
        <nav>
          <ul>
            <li><Link to="/">About & Skills</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/">Timeline</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </nav>
      </header>
      {/* Add content here for the home page */}
    </div>
  );
}

export default Home;