// src/components/SidePanel.jsx
import React from "react";
import Personal from "./ResumeForm/Personal";

export default function SidePanel({ data, setData }) {
  return (
    <div className="sidebar">
      <Personal data={data} setData={setData} />
    </div>
  );
}
