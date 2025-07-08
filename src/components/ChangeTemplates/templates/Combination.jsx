// src/components/ChangeTemplates/templates/Combination.jsx
import React from "react";
import "../../../styles/combination.css";

const Combination = ({ data }) => {
  return (
    <div className="preview-wrapper">
    <div className="combination-resume">
      <div className="combo-header">
        {data.profileImage && (
          <img src={data.profileImage} alt="Profile" className="combo-photo" />
        )}
        <div>
          <h1 className="combo-name">{data.fullName}</h1>
          <p className="combo-role">{data.profession}</p>
          <p className="combo-summary">{data.summary}</p>
        </div>
      </div>

      <div className="combo-main">
        <div className="combo-sidebar">
          <section>
            <h3 className="combo-section-title">Contact</h3>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phoneNumber}</p>
            <p>{data.city}, {data.country} {data.postalCode}</p>
          </section>

          {data.skills?.length > 0 && (
            <section>
              <h3 className="combo-section-title">Skills</h3>
              <ul className="combo-list">
                {data.skills.map((skill, idx) => <li key={idx}>{skill}</li>)}
              </ul>
            </section>
          )}

          {data.tools?.length > 0 && (
            <section>
              <h3 className="combo-section-title">Tools</h3>
              <ul className="combo-list">
                {data.tools.map((tool, idx) => <li key={idx}>{tool}</li>)}
              </ul>
            </section>
          )}

          {data.languages?.length > 0 && (
            <section>
              <h3 className="combo-section-title">Languages</h3>
              <ul className="combo-list">
                {data.languages.map((lang, idx) => (
                  <li key={idx}>{lang.language} - {lang.proficiency}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <div className="combo-content">
          {data.experiences?.length > 0 && (
            <section>
              <h3 className="combo-section-title">Work Experience</h3>
              {data.experiences.map((exp, idx) => (
                <div key={idx} className="combo-item">
                  <strong>{exp.jobTitle}</strong> at {exp.companyName} ({exp.startDate} - {exp.endDate})
                  <p>{exp.description}</p>
                </div>
              ))}
            </section>
          )}

          {data.education?.length > 0 && (
            <section>
              <h3 className="combo-section-title">Education</h3>
              {data.education.map((edu, idx) => (
                <div key={idx} className="combo-item">
                  <strong>{edu.qualification}</strong> in {edu.fieldOfStudy}<br />
                  {edu.schoolName} ({edu.startDate} - {edu.endDate})
                </div>
              ))}
            </section>
          )}

          {data.certifications?.length > 0 && (
            <section>
              <h3 className="combo-section-title">Certifications</h3>
              {data.certifications.map((cert, idx) => (
                <div key={idx} className="combo-item">
                  <strong>{cert.Certificate}</strong> - {cert.issuingOrganization}<br />
                  {cert.issueDate} - {cert.endDate}<br />
                  {cert.description}
                </div>
              ))}
            </section>
          )}

          {data.projects?.length > 0 && (
            <section>
              <h3 className="combo-section-title">Projects</h3>
              {data.projects.map((proj, idx) => (
                <div key={idx} className="combo-item">
                  <strong>{proj.title}</strong><br />
                  {proj.description}<br />
                  {proj.technologies?.length > 0 && (
                    <em>Tech:</em>
                  )} {proj.technologies?.join(", ")}
                </div>
              ))}
            </section>
          )}

          {data.volunteers?.length > 0 && (
            <section>
              <h3 className="combo-section-title">Volunteer Work</h3>
              {data.volunteers.map((vol, idx) => (
                <div key={idx} className="combo-item">
                  <strong>{vol.role}</strong> - {vol.organization}<br />
                  {vol.year} ({vol.duration})<br />
                  {vol.description}
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Combination;
