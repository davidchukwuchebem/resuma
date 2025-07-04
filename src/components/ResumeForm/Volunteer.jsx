import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const Volunteer = ({ data, setData, goToNextStep, goBack }) => {
  const [volunteers, setVolunteers] = useState(() =>
    Array.isArray(data.volunteers) && data.volunteers.length > 0
      ? data.volunteers
      : [
          {
            role: "",
            organization: "",
            year: "",
            duration: "",
            description: "",
          },
        ]
  );

  useEffect(() => {
    setData((prev) => ({ ...prev, volunteers }));
  }, [volunteers, setData]);

  const handleChange = (index, field, value) => {
    const updated = [...volunteers];
    updated[index][field] = value;
    setVolunteers(updated);
  };

  const addVolunteer = () => {
    setVolunteers((prev) => [
      ...prev,
      {
        role: "",
        organization: "",
        year: "",
        duration: "",
        description: "",
      },
    ]);
  };

  const removeVolunteer = (index) => {
    const updated = volunteers.filter((_, i) => i !== index);
    setVolunteers(updated);
  };

  return (
    <div className="form-container">
      <div className="link-header">
        <h2>Volunteer Experience</h2>
        <button type="button" className="add-skill-btn" onClick={addVolunteer}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      {volunteers.map((entry, idx) => (
        <div key={idx} className="volunteer-section">
          <h3>Entry {idx + 1}</h3>

          <div className="form-group">
            <label>Role</label>
            <input
              type="text"
              placeholder="e.g. Event Organizer"
              value={entry.role}
              onChange={(e) => handleChange(idx, "role", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Organization</label>
            <input
              type="text"
              placeholder="e.g. Red Cross"
              value={entry.organization}
              onChange={(e) => handleChange(idx, "organization", e.target.value)}
            />
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Year</label>
              <input
                type="text"
                placeholder="e.g. 2023"
                value={entry.year}
                onChange={(e) => handleChange(idx, "year", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Duration</label>
              <input
                type="text"
                placeholder="e.g. 3 months"
                value={entry.duration}
                onChange={(e) => handleChange(idx, "duration", e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              rows={4}
              placeholder="Describe your volunteer experience"
              value={entry.description}
              onChange={(e) => handleChange(idx, "description", e.target.value)}
            />
          </div>

          <div className="delete-btn-container">
            <button
              type="button"
              className="delete-btn"
              onClick={() => removeVolunteer(idx)}
              title="Delete Volunteer Entry"
            >
              <FontAwesomeIcon icon={faTrash} /> Delete Entry
            </button>
          </div>

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

export default Volunteer;
