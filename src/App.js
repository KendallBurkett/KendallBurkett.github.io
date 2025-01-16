import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

function ResumeRedirect() {
  // Redirects to the PDF file
  window.location.href = "./Kendall_Burkett_Resumé.pdf";
  return null; // Avoid rendering anything
}

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
          {/* Redirect to the PDF file */}
          <Route path="/Resume" element={<ResumeRedirect />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;