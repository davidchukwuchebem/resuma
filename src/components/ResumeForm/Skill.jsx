import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const Skill = ({ data, setData, goBack, goToNextStep }) => {
  const [skills, setSkills] = useState(() =>
    Array.isArray(data.skills) ? data.skills : [""]
  );

  useEffect(() => {
    if (Array.isArray(data.skills)) {
      setSkills(data.skills);
    }
  }, [data.skills]);

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
    setData((prev) => ({ ...prev, skills: updatedSkills }));
  };

  const addSkill = () => {
    const newSkills = [...skills, ""];
    setSkills(newSkills);
    setData((prev) => ({ ...prev, skills: newSkills }));
  };

  const removeSkill = (index) => {
    const updated = skills.filter((_, i) => i !== index);
    setSkills(updated);
    setData((prev) => ({ ...prev, skills: updated }));
  };

  const handleNext = () => {
    const validSkills = skills.filter((skill) => skill.trim() !== "");
    if (validSkills.length === 0) {
      alert("Please enter at least one skill.");
      return;
    }
    goToNextStep();
  };

  return (
    <div className="form-container">
      <div className="link-header">
        <h2>Skills</h2>
        <button type="button" className="add-skill-btn" onClick={addSkill}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      <div className="skills-section">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-input-group">
            <input
              value={skill}
              placeholder="e.g. JavaScript, React, Figma"
              onChange={(e) => handleSkillChange(idx, e.target.value)}
            />
            <button
              type="button"
              className="remove-skill-btn delete-btn"
              onClick={() => removeSkill(idx)}
              title="Remove skill"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
      </div>

      <div className="button-group">
        <button className="back-btn" onClick={goBack}>Back</button>
        <button className="next-btn" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Skill;
