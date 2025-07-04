import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const Project = ({ data, setData, goToNextStep, goBack }) => {
  const [projects, setProjects] = useState(() =>
    Array.isArray(data.projects) && data.projects.length > 0
      ? data.projects
      : [
          {
            title: "",
            description: "",
            technologies: [""],
            links: [""],
          },
        ]
  );

useEffect(() => {
  setData((prev) => ({ ...prev, projects }));
}, [projects, setData]);


  const handleProjectChange = (index, field, value) => {
    const updated = [...projects];
    updated[index][field] = value;
    setProjects(updated);
  };

  const handleTechChange = (pIndex, tIndex, value) => {
    const updated = [...projects];
    updated[pIndex].technologies[tIndex] = value;
    setProjects(updated);
  };

  const addTechnology = (pIndex) => {
    const updated = [...projects];
    updated[pIndex].technologies.push("");
    setProjects(updated);
  };

  const removeTechnology = (pIndex, tIndex) => {
    const updated = [...projects];
    updated[pIndex].technologies = updated[pIndex].technologies.filter((_, i) => i !== tIndex);
    setProjects(updated);
  };

  const handleLinkChange = (pIndex, lIndex, value) => {
    const updated = [...projects];
    updated[pIndex].links[lIndex] = value;
    setProjects(updated);
  };

  const addLink = (pIndex) => {
    const updated = [...projects];
    updated[pIndex].links.push("");
    setProjects(updated);
  };

  const removeLink = (pIndex, lIndex) => {
    const updated = [...projects];
    updated[pIndex].links = updated[pIndex].links.filter((_, i) => i !== lIndex);
    setProjects(updated);
  };

  const addProject = () => {
    const updated = [
      ...projects,
      {
        title: "",
        description: "",
        technologies: [""],
        links: [""],
      },
    ];
    setProjects(updated);
  };

  const removeProject = (index) => {
    const updated = projects.filter((_, i) => i !== index);
    setProjects(updated);
  };

  return (
    <div className="form-container">
      <div className="link-header">
        <h2>Projects</h2>
        <button type="button" className="add-skill-btn" onClick={addProject}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      {projects.map((project, idx) => (
        <div key={idx} className="project-section">
          <h3>Project {idx + 1}</h3>
          <div className="form-group">
            <label>Project Title</label>
            <input
              value={project.title}
              placeholder="Enter project title"
              onChange={(e) => handleProjectChange(idx, "title", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Project Description</label>
            <textarea
              rows={4}
              value={project.description}
              placeholder="Describe your project"
              onChange={(e) => handleProjectChange(idx, "description", e.target.value)}
            />
          </div>

          {/* Technologies */}
          <div className="links-section">
            <div className="link-header">
              <label>Technologies Used</label>
              <button type="button" className="add-link-btn" onClick={() => addTechnology(idx)}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            {project.technologies.map((tech, tIdx) => (
              <div key={tIdx} className="skill-input-group">
                <input
                  value={tech}
                  placeholder="e.g. React, Node.js"
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
              <label>Project Links</label>
              <button type="button" className="add-link-btn" onClick={() => addLink(idx)}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            {project.links.map((link, lIdx) => (
              <div key={lIdx} className="skill-input-group">
                <input
                  value={link}
                  placeholder="e.g. https://github.com/my-project"
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

          {/* Delete project button */}
          <div className="delete-btn-container">
            <button
              type="button"
              className="delete-btn"
              onClick={() => removeProject(idx)}
              title="Delete project"
            >
              <FontAwesomeIcon icon={faTrash} /> Delete Project
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

export default Project;
