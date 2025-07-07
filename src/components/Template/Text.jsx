import React from "react";

export default function Text() {
  return (
    <div className="form-container " style={{ marginTop: 20 }}>
      {/* Name Input */}
      <div className="form-group" style={{ marginBottom: 20 }}>
        <label htmlFor="primaryFont">Primary font</label>
        <input type="text" name="primaryFont" placeholder="Sans serif" />
      </div>
      <div className="form-group" style={{ marginBottom: 20 }}>
        <label htmlFor="secondaryFont">Secondary font</label>
        <input type="text" name="secondaryFont" placeholder="Sans serif" />
      </div>
      <div className="form-group" style={{ marginBottom: 20 }}>
        <label htmlFor="size">Size</label>
        <input type="range" name="size" />
      </div>
      <div className="form-group" style={{ marginBottom: 20 }}>
        <label htmlFor="spacing">Spacing</label>
        <input type="range" name="spacing" />
      </div>
    </div>
  );
}
