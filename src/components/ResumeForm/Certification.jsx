import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const Certification = ({ data, setData, goToNextStep, goBack }) => {
  const [certifications, setCertifications] = useState(
    Array.isArray(data.certifications) && data.certifications.length > 0
      ? data.certifications
      : [
          {
            Certificate: "",
            companyName: "",
            issuingOrganization: "",
            issueDate: "",
            endDate: "",
            description: ""
          }
        ]
  );

  useEffect(() => {
    setData((prev) => ({ ...prev, certifications }));
  }, [certifications, setData]);

  const handleChange = (index, field, value) => {
    const updated = [...certifications];
    updated[index][field] = value;
    setCertifications(updated);
  };

  const addCertification = () => {
    setCertifications((prev) => [
      ...prev,
      {
        Certificate: "",
        companyName: "",
        issuingOrganization: "",
        issueDate: "",
        endDate: "",
        description: ""
      }
    ]);
  };

  const removeCertification = (index) => {
    const updated = certifications.filter((_, i) => i !== index);
    setCertifications(updated);
  };

  return (
    <div className="form-container">
      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress" style={{ width: "50%" }}></div>
      </div>

      <div className="section-header link-header">
        <h2>Certifications</h2>
        <button type="button" className="add-link-btn" onClick={addCertification}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      {certifications.map((cert, index) => (
        <div key={index} className="experience-section">
          <h3>Certificate {index + 1}</h3>

          <div className="form-group">
            <label>Certificate</label>
            <input
              type="text"
              placeholder="Certificate"
              value={cert.Certificate}
              onChange={(e) => handleChange(index, "Certificate", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              placeholder="Company Name"
              value={cert.companyName}
              onChange={(e) => handleChange(index, "companyName", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Issuing Organization</label>
            <input
              type="text"
              placeholder="Issuing Organization"
              value={cert.issuingOrganization}
              onChange={(e) => handleChange(index, "issuingOrganization", e.target.value)}
            />
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Issue Date</label>
              <input
                type="text"
                placeholder="Issue Date"
                value={cert.issueDate}
                onChange={(e) => handleChange(index, "issueDate", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input
                type="text"
                placeholder="End Date (optional)"
                value={cert.endDate}
                onChange={(e) => handleChange(index, "endDate", e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              placeholder="Description"
              rows={5}
              value={cert.description}
              onChange={(e) => handleChange(index, "description", e.target.value)}
            />
          </div>

          {certifications.length > 1 && (
            <div className="delete-btn-container">
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeCertification(index)}
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

export default Certification;
