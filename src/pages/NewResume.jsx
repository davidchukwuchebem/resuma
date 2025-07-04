// src/pages/NewResume.jsx
import React, { useState, useMemo } from "react";
import SidePanel from "../components/SidePanel";
import ResumePreview from "../components/ResumePreview";
import "../styles/main.css";

const NewResume = () => {
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

  return (
    <div className="edit-resume-container">
 
      <SidePanel data={resumeData} setData={setResumeData} progressPercentage={progress} />
      <div className="resume-content">
        <div className="app">
          <ResumePreview data={resumeData} />
        </div>
      </div>
    </div>
  );
};

export default NewResume;
