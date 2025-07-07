// src/pages/NewResume.jsx
import { useMemo, useRef } from "react";
import SidePanel from "../components/SidePanel";
import ResumePreview from "../components/ResumePreview";
import html2pdf from "html2pdf.js";
import "../styles/main.css";
import { useResumeDataContext } from "../contexts/ResumeDataProvider";

const NewResume = ({ onDownloadPDF }) => {
  const resumeRef = useRef();
  const handleExportChange = (e) => {
    const format = e.target.value;
    if (format === "pdf") {
      if (typeof onDownloadPDF === "function") {
        onDownloadPDF(); // 🚀 call the PDF generator passed down from NewResume.jsx
      } else {
        console.warn("onDownloadPDF not available");
      }
    } else if (format === "png") {
      alert("PNG export not implemented yet.");
    }
  };
  const { resumeData, setResumeData } = useResumeDataContext();

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
          <button className="back-btn edit-btn">Edit Template</button>
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
          <ResumePreview data={resumeData} />
        </div>
      </div>
    </div>
  );
};

export default NewResume;
