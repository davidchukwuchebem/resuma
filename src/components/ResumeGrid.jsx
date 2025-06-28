import React from "react";
import "../styles/main.css";
import preview from "../assets/resume-preview.png"; // your resume preview image

const resumes = [
  { id: 1, title: "Resume" },
  { id: 2, title: "Dextrus" },
  { id: 3, title: "Daniel Im..." },
  { id: 4, title: "Esther We..." },
  { id: 5, title: "DAVID" },
];
const templates = [
  { id: 1, title: "Resume" },
  { id: 2, title: "Dextrus" },
  { id: 3, title: "Daniel Im..." },
  { id: 4, title: "Esther We..." },
];

const ResumeGrid = () => {
  return (
    <>
    <div className="container">
      <div>
      <h2 className="section-title">Choose Template</h2>
      <div className="resume-grid">
      <div className="resume-card">
  <div className="new-resume">
    <div className="plus">+</div>
  </div>
  {/* <div className="resume-footer">
    <p className="resume-title">Create New</p>
    <span className="more-options" style={{ visibility: 'hidden' }}>⋮</span>
  </div> */}
      </div>


        {templates.map((template) => (
          <div key={template.id} className="resume-card">
            <img src={preview} alt={template.title} className="resume-img" />
            {/* <div className="resume-footer">
              <p className="resume-title">{resume.title}</p>
              <span className="more-options">⋮</span>
            </div> */}
          </div>
        ))}
      </div>
      <hr />
      </div>
    </div>
    <div className="container">
      <div>
      <h2 className="section-title">My Resumes</h2>
      <div className="resume-grid">
        {resumes.map((resume) => (
          <div key={resume.id} className="resume-card">
            <img src={preview} alt={resume.title} className="resume-img" />
            <div className="resume-footer">
              <p className="resume-title">{resume.title}</p>
              <span className="more-options">⋮</span>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
    </>
  );
};

export default ResumeGrid;
