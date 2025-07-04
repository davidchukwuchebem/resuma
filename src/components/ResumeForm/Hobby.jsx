import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const Hobby = ({ data, setData, goToNextStep, goBack }) => {
  const [hobbies, setHobbies] = useState(
    Array.isArray(data.hobbies) && data.hobbies.length > 0
      ? data.hobbies
      : [
          {
            hobby: "",
            proficiency: ""
          }
        ]
  );

  useEffect(() => {
    setData((prev) => ({ ...prev, hobbies }));
  }, [hobbies, setData]);

  const handleChange = (index, field, value) => {
    const updated = [...hobbies];
    updated[index][field] = value;
    setHobbies(updated);
  };

  const addHobby = () => {
    setHobbies([...hobbies, { hobby: "", proficiency: "" }]);
  };

  const removeHobby = (index) => {
    const updated = hobbies.filter((_, i) => i !== index);
    setHobbies(updated);
  };

  return (
    <div className="form-container">
      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress" style={{ width: "50%" }}></div>
      </div>

      <div className="section-header link-header">
        <h2>Hobbies</h2>
        <button type="button" className="add-link-btn" onClick={addHobby}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      {hobbies.map((exp, index) => (
        <div key={index} className="experience-section">
          <div className="form-grid">
            <div className="form-group">
              <label>Hobby</label>
              <input
                type="text"
                placeholder="e.g. Drawing, Gaming"
                value={exp.hobby}
                onChange={(e) => handleChange(index, "hobby", e.target.value)}
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
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
          </div>

          {/* Remove button */}
          {hobbies.length > 1 && (
            <div className="delete-btn-container">
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeHobby(index)}
              >
                <FontAwesomeIcon icon={faTrash} /> Delete
              </button>
            </div>
          )}

          <hr />
        </div>
      ))}

      <div className="button-row">
        <button className="back-btn" onClick={goBack}>Back</button>
        <button className="next-btn" onClick={goToNextStep}>Next</button>
      </div>
    </div>
  );
};

export default Hobby;
