import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const Hobby = ({ data, setData, goToNextStep, goBack, onDownloadPDF }) => {
  const [hobbies, setHobbies] = useState(
    Array.isArray(data.hobbies) && data.hobbies.length > 0
      ? data.hobbies
      : [{ hobby: "", proficiency: "" }]
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

          {hobbies.length > 1 && (
            <div className="delete-btn-container">
              <button type="button" className="delete-btn" onClick={() => removeHobby(index)}>
                <FontAwesomeIcon icon={faTrash} /> Delete
              </button>
            </div>
          )}

          <hr />
        </div>
      ))}

      <div className="button-row">
        <button className="back-btn" onClick={goBack}>Back</button>

        {/* ✅ Export Options */}
        <select className="next-btn export" onChange={handleExportChange} defaultValue="">
          <option value="" disabled>Export As</option>
          <option value="pdf">PDF</option>
          <option value="png">PNG</option>
        </select>
      </div>
    </div>
  );
};

export default Hobby;
