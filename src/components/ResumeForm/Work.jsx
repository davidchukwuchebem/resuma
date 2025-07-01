import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const WorkExperience = ({ data, setData, goToNextStep, goBack }) => {
  const [experiences, setExperiences] = useState(data.experiences || [
    {
      jobTitle: "",
      companyName: "",
      location: "",
      startDate: "",
      endDate: "",
      description: ""
    }
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...experiences];
    updated[index][field] = value;
    setExperiences(updated);
    setData((prev) => ({ ...prev, experiences: updated }));
  };

  const addExperience = () => {
    const updated = [...experiences, {
      jobTitle: "",
      companyName: "",
      location: "",
      startDate: "",
      endDate: "",
      description: ""
    }];
    setExperiences(updated);
    setData((prev) => ({ ...prev, experiences: updated }));
  };

  return (
    <div className="form-container">
      {/* Progress Bar */}
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
        </div>
      ))}

      <div className="button-row">
      <button className="back-btn"  onClick={goBack}>Back</button>
      <button className="next-btn"  onClick={goToNextStep}>Next</button>
      </div>
    </div>
  );
};

export default WorkExperience;
