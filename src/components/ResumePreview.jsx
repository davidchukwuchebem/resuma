import React from "react";

const ResumePreview = ({ data }) => {
  return (
    <div className="preview-wrapper">
      <div className="resume-preview dark-theme">
        {/* Left Section */}
        <div className="left-section">
          {data.profileImage && (
            <img src={data.profileImage} alt="Profile" className="resume-photo" />
          )}
          <h1>{data.fullName}</h1>
          <p className="role-title">{data.profession}</p>
          <p className="summary">{data.summary}</p>

          <h3>Work Experience</h3>
          <div className="job-section">
            <p className="job-title">{data.experienceTitle || "Job Title"}</p>
            <p className="job-description">{data.experience}</p>
          </div>

          <h3>Education</h3>
          <p>{data.education}</p>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h4>Contact</h4>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phoneNumber}</p>
          <p><strong>City:</strong> {data.city}</p>
          <p><strong>Country:</strong> {data.country}</p>
          <p><strong>Postal Code:</strong> {data.postalCode}</p>

          {Array.isArray(data.links) && data.links.length > 0 && (
            <>
              <h4>Links</h4>
              {data.links.map((link, idx) =>
                link?.trim() ? (
                  <p key={idx}>
                    <a href={link} target="_blank" rel="noreferrer">{link}</a>
                  </p>
                ) : null
              )}
            </>
          )}

          {Array.isArray(data.skills) && data.skills.length > 0 && (
            <>
              <h4>Skills</h4>
              <ul className="skills">
                {data.skills.map((skill, idx) => (
                  <li key={idx}>{skill.trim()}</li>
                ))}
              </ul>
            </>
          )}

          {Array.isArray(data.tools) && data.tools.length > 0 && (
            <>
              <h4>Tools</h4>
              <ul className="tools">
                {data.tools.map((tool, idx) => (
                  <li key={idx}>{tool.trim()}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
