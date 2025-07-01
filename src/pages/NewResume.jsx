// src/pages/NewResume.jsx
import React, { useState } from "react";
import SidePanel from "../components/SidePanel";
import ResumePreview from "../components/ResumePreview";
import "../styles/main.css";

const NewResume = () => {
  const [resumeData, setResumeData] = useState({
    fullName: "John Doe",
    email: "john@example.com",
    profession: "Full-Stack Developer",
    phoneNumber: "123-456-7890",
    phone: "123-456-7890",
    summary: "A passionate web developer with a knack for elegant design and robust backend systems.",
    experienceTitle: "Frontend Developer @ ABC Corp",
    experience: "Developed and maintained company website. Improved page performance by 40%.",
    education: "B.Sc. in Computer Science - University of Lagos",
    skills: "HTML, CSS, JavaScript, React, Redux",
    tools: "Figma, GitHub, Notion, Postman"
  });

  return (
    <div className="edit-resume-container">
      {/* Sidebar with form */}
      <SidePanel data={resumeData} setData={setResumeData} />

      {/* Resume Preview */}
      <div className="resume-content">
        <div className="app">
          <ResumePreview data={resumeData} />
        </div>
      </div>
    </div>
  );
};

export default NewResume;
