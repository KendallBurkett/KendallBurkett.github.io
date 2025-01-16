import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#101c3a", padding: "1rem" }}>
      <ul style={{ display: "flex", listStyle: "none", justifyContent: "center", margin: 0, padding: 0 }}>
        <li style={{ margin: "0 1rem" }}>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>About</Link>
        </li>
        <li style={{ margin: "0 1rem" }}>
          <Link to="/Portfolio" style={{ color: "#fff", textDecoration: "none" }}>Portfolio</Link>
        </li>
        <li style={{ margin: "0 1rem" }}>
          <Link to="/Resume" style={{ color: "#fff", textDecoration: "none" }}>Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;