import React, { useState, useRef, useEffect } from "react";
import "../styles/main.css";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => setShowDropdown(prev => !prev);

  // Optional: Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="logo-box">
        <img src={logo} alt="Logo" className="logo-icon" />
        {/* <span className="logo-text">Resume</span> */}
      </div>

      <div className="profile" onClick={toggleDropdown} ref={dropdownRef}>
        <img src={avatar} alt="Profile" className="avatar" />
        {showDropdown && (
          <div className="dropdown">
            <a href="/settings">Settings</a>
            <hr />
            <a href="/logout">Logout</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
