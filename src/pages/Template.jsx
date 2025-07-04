// src/pages/NewResume.jsx
import { useRef } from "react";

import "../styles/main.css";
import { useResumeDataContext, data } from "../contexts/ResumeDataProvider";
import TemplateSidePanel from "../components/Template/TemplateSidePanel";
import TemplatePreview from "../components/Template/TemplatePreview";

const Template = ({ onDownloadPDF }) => {
  const resumeRef = useRef();

  const { resumeData, setResumeData } = useResumeDataContext();

  return (
    <div className="edit-resume-container">
      <TemplateSidePanel data={data} setData={setResumeData} />
      <div className="resume-content">
        <div className="button-group">
          <button className="next-btn">Done</button>
        </div>
        <div
          className="app"
          style={{
            margin: 50,
          }}
          ref={resumeRef}
        >
          <TemplatePreview data={data} />
        </div>
      </div>
    </div>
  );
};

export default Template;
