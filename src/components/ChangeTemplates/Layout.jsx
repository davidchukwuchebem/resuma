import React from "react";

export default function Layout() {
  return (
    <div className="form-container " style={{ marginTop: 20 }}>
      {/* Name Input */}
      <div className="form-group" style={{ marginBottom: 20 }}>
        <label htmlFor="format">Format</label>
        <input type="text" name="format" placeholder="A4 (8.22'' x 9.11'')" />
      </div>
    </div>
  );
}
