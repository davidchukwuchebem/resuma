// src/pages/NewResume.jsx
import { useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import html2pdf from "html2pdf.js";
import SidePanel from "../components/SidePanel";
import "../styles/main.css";

import { useResumeDataContext } from "../contexts/ResumeDataProvider";

// Import template components
import Chronological from "../components/ChangeTemplates/templates/Chronological";
import Modern from "../components/ChangeTemplates/templates/Modern";
import Combination from "../components/ChangeTemplates/templates/Combination";
import Functional from "../components/ChangeTemplates/templates/Functional";

// Add additional templates as you implement them

const NewResume = ({ onDownloadPDF }) => {
  const resumeRef = useRef();
  const { resumeData, setResumeData, selectedTemplate } = useResumeDataContext();

  // Dynamically map template names to components
  const templateComponents = {
    Chronological,
    Modern,
    Functional,
    Combination,
    // Add more templates here
  };

  // Get selected component (default to Chronological)
  const SelectedTemplateComponent =
    templateComponents[selectedTemplate] || Chronological;

  const handleExportChange = (e) => {
    const format = e.target.value;
    if (format === "pdf") {
      if (typeof onDownloadPDF === "function") {
        onDownloadPDF();
      } else {
        handleDownloadPDF(); // Fallback
      }
    } else if (format === "png") {
      alert("PNG export not implemented yet.");
    }
  };

  const handleDownloadPDF = () => {
    if (!resumeRef.current) return;
    const element = resumeRef.current;
    const options = {
      margin: 0,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(options).from(element).save();
  };

  const progress = useMemo(() => {
    const sections = [
      "fullName",
      "email",
      "phoneNumber",
      "profession",
      "summary",
      "city",
      "country",
      "postalCode",
      "skills",
      "tools",
      "links",
      "experiences",
      "education",
      "certifications",
      "languages",
      "projects",
      "volunteers",
      "hobbies",
    ];

    const filled = sections.filter((key) => {
      const value = resumeData[key];
      if (Array.isArray(value)) return value.length > 0;
      return value !== "" && value !== null && value !== undefined;
    }).length;

    return Math.floor((filled / sections.length) * 100);
  }, [resumeData]);

  return (
    <div className="edit-resume-container">
      <SidePanel
        data={resumeData}
        setData={setResumeData}
        progressPercentage={progress}
        onDownloadPDF={handleDownloadPDF}
      />
      <div className="resume-content">
        <div className="button-group">
          <Link to="/templates" style={{ textDecoration: "none" }}>
            <button className="back-btn edit-btn">Edit Template</button>
          </Link>
          <select
            className="next-btn"
            onChange={handleExportChange}
            defaultValue=""
          >
            <option value="" disabled>
              Export As
            </option>
            <option value="pdf">PDF</option>
            <option value="png">PNG</option>
          </select>
        </div>
        <div className="app" ref={resumeRef}>
          <SelectedTemplateComponent data={resumeData} />
        </div>
      </div>
    </div>
  );
};

export default NewResume;
