// src/pages/NewResume.jsx
import React, { useState, useMemo, useRef } from "react";
import SidePanel from "../components/SidePanel";
import ResumePreview from "../components/ResumePreview";
import html2pdf from "html2pdf.js";
import "../styles/main.css";

const NewResume = ({onDownloadPDF}) => {
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
  const [resumeData, setResumeData] = useState({
    fullName: "John Doe",
    email: "john@example.com",
    phoneNumber: "123-456-7890",
    profession: "Full-Stack Developer",
    summary: "A passionate web developer with a knack for elegant design and robust backend systems.",
    city: "Lagos",
    country: "Nigeria",
    postalCode: "100001",
    profileImage: "",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    tools: ["Figma", "GitHub", "Notion", "Postman"],
    links: ["https://portfolio.example.com", "https://github.com/johndoe"],
    experiences: [
      {
        jobTitle: "Frontend Developer",
        companyName: "ABC Corp",
        location: "Lagos",
        startDate: "Jan 2021",
        endDate: "Dec 2022",
        description: "Developed and maintained company website. Improved page performance by 40%."
      }
    ],
    education: [
      {
        schoolName: "University of Lagos",
        qualification: "B.Sc.",
        fieldOfStudy: "Computer Science",
        startDate: "2015",
        endDate: "2019"
      }
    ],
    certifications: [
      {
        Certificate: "React Developer Certification",
        companyName: "Coursera",
        issuingOrganization: "Meta",
        issueDate: "June 2020",
        endDate: "Present",
        description: "Learned advanced React concepts and project architecture."
      }
    ],
    languages: [
      {
        language: "English",
        proficiency: "Native / Bilingual"
      },
      {
        language: "French",
        proficiency: "Intermediate"
      }
    ],
    projects: [
      {
        title: "Personal Portfolio",
        description: "A responsive portfolio site showcasing my work.",
        technologies: ["React", "Tailwind", "Framer Motion"],
        links: ["https://portfolio.example.com"]
      }
    ],
    volunteers: [
      {
        role: "Community Tech Lead",
        organization: "DevNG",
        year: "2022",
        duration: "6 months",
        description: "Led a team of developers in community engagement and mentorship."
      }
    ],
    hobbies: [
      {
        hobby: "Drawing",
        proficiency: "Advanced"
      },
      {
        hobby: "Gaming",
        proficiency: "Intermediate"
      }
    ]
  });

  const progress = useMemo(() => {
    const sections = [
      'fullName', 'email', 'phoneNumber', 'profession', 'summary',
      'city', 'country', 'postalCode', 'skills', 'tools', 'links',
      'experiences', 'education', 'certifications', 'languages',
      'projects', 'volunteers', 'hobbies'
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
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(options).from(element).save();
  };

  return (
    <div className="edit-resume-container">
      <SidePanel data={resumeData} setData={setResumeData} progressPercentage={progress} onDownloadPDF={handleDownloadPDF} />
      <div className="resume-content">
         <div className="button-group">
        <button className="back-btn edit-btn">Edit Template</button>
        <select className="next-btn" onChange={handleExportChange} defaultValue="">
          <option value="" disabled>Export As</option>
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
