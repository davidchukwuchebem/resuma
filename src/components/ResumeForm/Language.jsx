import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const Language = ({ data, setData, goToNextStep, goBack }) => {
  const [languages, setLanguages] = useState(
    Array.isArray(data.languages) && data.languages.length > 0
      ? data.languages
      : [
          {
            language: "",
            proficiency: "",
            issuingOrganization: "",
            issueDate: "",
            endDate: "",
            description: ""
          }
        ]
  );

  useEffect(() => {
    setData((prev) => ({ ...prev, languages }));
  }, [languages, setData]);

  const handleChange = (index, field, value) => {
    const updated = [...languages];
    updated[index][field] = value;
    setLanguages(updated);
  };

  const addLanguage = () => {
    setLanguages((prev) => [
      ...prev,
      {
        language: "",
        proficiency: "",
        issuingOrganization: "",
        issueDate: "",
        endDate: "",
        description: ""
      }
    ]);
  };

  const removeLanguage = (index) => {
    const updated = languages.filter((_, i) => i !== index);
    setLanguages(updated);
  };

  return (
    <div className="form-container">
      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress" style={{ width: "50%" }}></div>
      </div>

      <div className="section-header link-header">
        <h2>Languages</h2>
        <button type="button" className="add-link-btn" onClick={addLanguage}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      {languages.map((exp, index) => (
        <div key={index} className="experience-section">
          <div className="form-grid">
            <div className="form-group">
              <label>Language</label>
              <input
                type="text"
                placeholder="Language"
                value={exp.language}
                onChange={(e) => handleChange(index, "language", e.target.value)}
              />
            </div>

            <div className="form-group proficiency">
              <label>Proficiency</label>
              <select
                value={exp.proficiency}
                onChange={(e) => handleChange(index, "proficiency", e.target.value)}
              >
                <option value="">Select proficiency</option>
                <option value="Beginner">Beginner</option>
                <option value="Elementary">Elementary</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Upper Intermediate">Upper Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Native / Bilingual">Native / Bilingual</option>
              </select>
            </div>
          </div>

          {/* Remove button */}
          {languages.length > 1 && (
            <div className="delete-btn-container">
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeLanguage(index)}
              >
                <FontAwesomeIcon icon={faTrash} /> Delete
              </button>
            </div>
          )}

          <hr />
        </div>
      ))}

     <div className="button-group">
        <button className="back-btn" onClick={goBack}>Back</button>
        <button className="next-btn" onClick={goToNextStep}>Next</button>
      </div>
    </div>
  );
};

export default Language;
