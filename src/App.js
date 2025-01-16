import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";

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
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<BlankPortfolioPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;