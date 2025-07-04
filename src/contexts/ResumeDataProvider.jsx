import { useContext, createContext, useState } from "react";

export const data = {
  fullName: "John Doe",
  email: "john@example.com",
  phoneNumber: "123-456-7890",
  profession: "Full-Stack Developer",
  summary:
    "A passionate web developer with a knack for elegant design and robust backend systems.",
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
      description:
        "Developed and maintained company website. Improved page performance by 40%.",
    },
  ],
  education: [
    {
      schoolName: "University of Lagos",
      qualification: "B.Sc.",
      fieldOfStudy: "Computer Science",
      startDate: "2015",
      endDate: "2019",
    },
  ],
  certifications: [
    {
      Certificate: "React Developer Certification",
      companyName: "Coursera",
      issuingOrganization: "Meta",
      issueDate: "June 2020",
      endDate: "Present",
      description: "Learned advanced React concepts and project architecture.",
    },
  ],
  languages: [
    {
      language: "English",
      proficiency: "Native / Bilingual",
    },
    {
      language: "French",
      proficiency: "Intermediate",
    },
  ],
  projects: [
    {
      title: "Personal Portfolio",
      description: "A responsive portfolio site showcasing my work.",
      technologies: ["React", "Tailwind", "Framer Motion"],
      links: ["https://portfolio.example.com"],
    },
  ],
  volunteers: [
    {
      role: "Community Tech Lead",
      organization: "DevNG",
      year: "2022",
      duration: "6 months",
      description:
        "Led a team of developers in community engagement and mentorship.",
    },
  ],
  hobbies: [
    {
      hobby: "Drawing",
      proficiency: "Advanced",
    },
    {
      hobby: "Gaming",
      proficiency: "Intermediate",
    },
  ],
};

const ResumeDataContext = createContext({
  resumeData: "",
  setResumeData: () => {},
});

export const useResumeDataContext = () => useContext(ResumeDataContext);

export default function ResumeDataProvider({ children }) {
  const [resumeData, setResumeData] = useState(data);

  return (
    <ResumeDataContext value={{ resumeData, setResumeData }}>
      {children}
    </ResumeDataContext>
  );
}
