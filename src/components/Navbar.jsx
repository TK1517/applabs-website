import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="nav-wrapper">
      <nav className="navbar">
        <div className="logo">
  <img src="/logo.png" alt="APPLABS Logo" className="logo-img" />
  <span>APPLABS</span>
</div>

        {/* 🔥 FIX 1: connect menuOpen to nav-links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li onClick={() => {
        document.getElementById("showcase").scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    }}>
      Home
    </li>
          <li onClick={() => {
      document.getElementById("projects-section").scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
  }}>Projects</li>
          <li onClick={() => {
      document.getElementById("team").scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
  }}>
    Team
  </li>
        </ul>

        <div className="nav-right">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

          <button className="nav-btn" onClick={() => {
  document.getElementById("submit-section").scrollIntoView({ behavior: "smooth" });
}}>
  Submit Ideas
</button>

          {/* 🔥 FIX 2: move hamburger inside nav-right */}
          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;