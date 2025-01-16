import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

function BlankPortfolioPage() {
  return (
    <div style={{ backgroundColor: "#101c3a", height: "100vh", color: "#fff" }}>
      <h1 style={{ textAlign: "center", paddingTop: "20%" }}>Portfolio</h1>
    </div>
  );
}

function App() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            {/* Redirect '/' to '/About' */}
            <Route path="/" element={<Navigate to="./pages/About" replace />} />
            <Route path="/About" element={<About />} />
            <Route path="/Portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </Router>
    );
  }
  
  export default App;