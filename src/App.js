import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume"; // Import the Resume component

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Default homepage shows the About page */}
          <Route path="/" element={<About />} />
          {/* Portfolio page */}
          <Route path="/Portfolio" element={<Portfolio />} />
          {/* Resume page */}
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;