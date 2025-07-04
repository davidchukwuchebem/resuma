import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const Award = ({ data, setData, goToNextStep, goBack }) => {
  const [awards, setAwards] = useState(() =>
    Array.isArray(data.awards) && data.awards.length > 0
      ? data.awards
      : [
          {
            title: "",
            issuedBy: "",
            year: "",
            description: "",
            technologies: [""],
            links: [""],
          },
        ]
  );

  useEffect(() => {
    setData((prev) => ({ ...prev, awards }));
  }, [awards, setData]);

  const handleAwardChange = (index, field, value) => {
    const updated = [...awards];
    updated[index][field] = value;
    setAwards(updated);
  };

  const handleTechChange = (aIndex, tIndex, value) => {
    const updated = [...awards];
    updated[aIndex].technologies[tIndex] = value;
    setAwards(updated);
  };

  const addTechnology = (aIndex) => {
    const updated = [...awards];
    updated[aIndex].technologies.push("");
    setAwards(updated);
  };

  const removeTechnology = (aIndex, tIndex) => {
    const updated = [...awards];
    updated[aIndex].technologies = updated[aIndex].technologies.filter((_, i) => i !== tIndex);
    setAwards(updated);
  };

  const handleLinkChange = (aIndex, lIndex, value) => {
    const updated = [...awards];
    updated[aIndex].links[lIndex] = value;
    setAwards(updated);
  };

  const addLink = (aIndex) => {
    const updated = [...awards];
    updated[aIndex].links.push("");
    setAwards(updated);
  };

  const removeLink = (aIndex, lIndex) => {
    const updated = [...awards];
    updated[aIndex].links = updated[aIndex].links.filter((_, i) => i !== lIndex);
    setAwards(updated);
  };

  const addAward = () => {
    setAwards((prev) => [
      ...prev,
      {
        title: "",
        issuedBy: "",
        year: "",
        description: "",
        technologies: [""],
        links: [""],
      },
    ]);
  };

  const removeAward = (index) => {
    const updated = awards.filter((_, i) => i !== index);
    setAwards(updated);
  };

  return (
    <div className="form-container">
      <div className="link-header">
        <h2>Awards</h2>
        <button type="button" className="add-skill-btn" onClick={addAward}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      {awards.map((award, idx) => (
        <div key={idx} className="award-section">
          <h3>Award {idx + 1}</h3>

          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              placeholder="Award Title"
              value={award.title}
              onChange={(e) => handleAwardChange(idx, "title", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Issued By</label>
            <input
              type="text"
              placeholder="Organization or Issuer"
              value={award.issuedBy}
              onChange={(e) => handleAwardChange(idx, "issuedBy", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Year</label>
            <input
              type="text"
              placeholder="e.g. 2023"
              value={award.year}
              onChange={(e) => handleAwardChange(idx, "year", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              rows={4}
              placeholder="Brief description of the award"
              value={award.description}
              onChange={(e) => handleAwardChange(idx, "description", e.target.value)}
            />
          </div>

          {/* Technologies */}
          <div className="links-section">
            <div className="link-header">
              <label>Technologies Involved</label>
              <button type="button" className="add-link-btn" onClick={() => addTechnology(idx)}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            {award.technologies.map((tech, tIdx) => (
              <div key={tIdx} className="skill-input-group">
                <input
                  value={tech}
                  placeholder="e.g. React, AI, Python"
                  onChange={(e) => handleTechChange(idx, tIdx, e.target.value)}
                />
                <button
                  type="button"
                  className="remove-skill-btn delete-btn"
                  onClick={() => removeTechnology(idx, tIdx)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="links-section">
            <div className="link-header">
              <label>Award Links</label>
              <button type="button" className="add-link-btn" onClick={() => addLink(idx)}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            {award.links.map((link, lIdx) => (
              <div key={lIdx} className="skill-input-group">
                <input
                  value={link}
                  placeholder="e.g. https://example.com/award"
                  onChange={(e) => handleLinkChange(idx, lIdx, e.target.value)}
                />
                <button
                  type="button"
                  className="remove-skill-btn delete-btn"
                  onClick={() => removeLink(idx, lIdx)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ))}
          </div>

          {/* Delete award button */}
          <div className="delete-btn-container">
            <button
              type="button"
              className="delete-btn"
              onClick={() => removeAward(idx)}
              title="Delete Award"
            >
              <FontAwesomeIcon icon={faTrash} /> Delete Award
            </button>
          </div>

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

export default Award;
