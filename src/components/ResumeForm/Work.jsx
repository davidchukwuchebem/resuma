import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const WorkExperience = ({ data, setData, goToNextStep, goBack }) => {
  const [experiences, setExperiences] = useState(
    Array.isArray(data.experiences) && data.experiences.length > 0
      ? data.experiences
      : [
          {
            jobTitle: "",
            companyName: "",
            location: "",
            startDate: "",
            endDate: "",
            description: ""
          }
        ]
  );

  const handleChange = (index, field, value) => {
    const updated = [...experiences];
    updated[index][field] = value;
    setExperiences(updated);
    setData((prev) => ({ ...prev, experiences: updated }));
  };

  const addExperience = () => {
    const updated = [
      ...experiences,
      {
        jobTitle: "",
        companyName: "",
        location: "",
        startDate: "",
        endDate: "",
        description: ""
      }
    ];
    setExperiences(updated);
    setData((prev) => ({ ...prev, experiences: updated }));
  };

  const removeExperience = (index) => {
    const updated = experiences.filter((_, i) => i !== index);
    setExperiences(updated);
    setData((prev) => ({ ...prev, experiences: updated }));
  };

  return (
    <div className="form-container">
      <div className="progress-bar">
        <div className="progress" style={{ width: "50%" }}></div>
      </div>

      <div className="section-header link-header">
        <h2>Work Experience</h2>
        <button type="button" className="add-link-btn" onClick={addExperience}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      {experiences.map((exp, index) => (
        <div key={index} className="experience-section">
          <h3>Experience {index + 1}</h3>

          <div className="form-group">
            <label>Job Title</label>
            <input
              type="text"
              placeholder="Job Title"
              value={exp.jobTitle}
              onChange={(e) => handleChange(index, "jobTitle", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              placeholder="Company Name"
              value={exp.companyName}
              onChange={(e) => handleChange(index, "companyName", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              placeholder="Location"
              value={exp.location}
              onChange={(e) => handleChange(index, "location", e.target.value)}
            />
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="text"
                placeholder="Start date"
                value={exp.startDate}
                onChange={(e) => handleChange(index, "startDate", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input
                type="text"
                placeholder="End date"
                value={exp.endDate}
                onChange={(e) => handleChange(index, "endDate", e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Job Description</label>
            <textarea
              placeholder="Job Description"
              value={exp.description}
              rows={5}
              onChange={(e) => handleChange(index, "description", e.target.value)}
            />
          </div>

          {/* Delete Experience Button */}
          {experiences.length > 1 && (
            <div className="delete-btn-container">
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeExperience(index)}
                title="Delete Experience"
              >
                <FontAwesomeIcon icon={faTrash} /> Delete Experience
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

export default WorkExperience;
