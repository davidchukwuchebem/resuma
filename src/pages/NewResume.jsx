// src/pages/NewResume.jsx
import React, { useState } from "react";
import SidePanel from "../components/SidePanel";
// import Personal from "../components/ResumeForm/Personal";
import ResumePreview from "../components/ResumePreview";
import "../styles/main.css";

const NewResume = () => {
  const [resumeData, setResumeData] = useState({
    fullName: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    summary: "A passionate web developer.",
    experience: "Worked at ABC Corp for 3 years.",
    education: "B.Sc in Computer Science",
  });

  return (
    <div className="edit-resume-container">
    <SidePanel data={resumeData} setData={setResumeData} />


      {/* Right: Resume Editor and Preview */}
      <div className="resume-content">
        {/* <h1 className="edit-resume-title">New Resume</h1> */}
        <div className="app">
          {/* <Personal data={resumeData} setData={setResumeData} /> */}
          <ResumePreview data={resumeData} />
        </div>
      </div>
    </div>
  );
};

export default NewResume;
