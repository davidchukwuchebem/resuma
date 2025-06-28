import React from "react";
import "../styles/main.css";
import logo from "../assets/logo.png"; // Replace with your orange cube logo
import avatar from "../assets/avatar.png"; // Replace with your profile image

const Header = () => {
  return (
    <header className="header">
      <div className="logo-box">
        <img src={logo} alt="Logo" className="logo-icon" />
        {/* <span className="logo-text">Resume</span> */}
      </div>

      <div className="profile">
        <img src={avatar} alt="Profile" className="avatar" />
      </div>
    </header>
  );
};

export default Header;
// This code defines a Header component that includes a logo and a profile image.