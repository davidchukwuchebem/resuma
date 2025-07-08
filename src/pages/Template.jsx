import { useRef } from "react";
import "../styles/main.css";
import { useResumeDataContext } from "../contexts/ResumeDataProvider";
import TemplateSidePanel from "../components/ChangeTemplates/TemplateSidePanel";
import { Link } from "react-router-dom";


// Import all template components
import Chronological from "../components/ChangeTemplates/templates/Chronological";
import Modern from "../components/ChangeTemplates/templates/Modern";
import Functional from "../components/ChangeTemplates/templates/Functional";
import Combination from "../components/ChangeTemplates/templates/Combination";
// import Creative from "../components/ChangeTemplates/templates/Creative";
// import Traditional from "../components/ChangeTemplates/templates/Traditional";
// import Infographic from "../components/ChangeTemplates/templates/Infographic";
// import Targeted from "../components/ChangeTemplates/templates/Targeted";

const Template = () => {
  const resumeRef = useRef();
  const { resumeData, selectedTemplate } = useResumeDataContext();

  // Template component map
  const templateComponents = {
    Chronological: Chronological,
    Modern: Modern,
    Functional: Functional,
    Combination: Combination,
    // Creative: Creative,
    // Traditional: Traditional,
    // Infographic: Infographic,
    // Targeted: Targeted,
  };

  // Get selected component
  const SelectedTemplateComponent = templateComponents[selectedTemplate] || Chronological;

  return (
    <div className="edit-resume-container">
      <TemplateSidePanel />
      <div className="resume-content">
        <div className="button-group">
          <Link to="/new-resume" style={{ textDecoration: "none" }}>
          <button className="next-btn">Done</button>
          </Link>
        </div>
        <div
          className="app"
          style={{ margin: 50 }}
          ref={resumeRef}
        >
          <SelectedTemplateComponent data={resumeData} />
        </div>
      </div>
    </div>
  );
};

export default Template;
