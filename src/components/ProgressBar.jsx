// src/components/ProgressBar.jsx
import React from "react";
import "../styles/main.css"; // or a separate CSS file if needed

const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${percentage}%` }}>
        {Math.round(percentage)}%
      </div>
    </div>
  );
};

export default ProgressBar;
