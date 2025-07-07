const TemplatePreview = ({ data }) => {
  return (
    <div className="preview-wrapper">
      <div className="resume-preview dark-theme">
        {/* Left Section */}
        <div className="left-section">
          {data.profileImage && (
            <img
              src={data.profileImage}
              alt="Profile"
              className="resume-photo"
            />
          )}
          <h1>{data.fullName}</h1>
          <p className="role-title">{data.profession}</p>
          <p className="summary">{data.summary}</p>

          {/* Work Experience */}
          {Array.isArray(data.experiences) && data.experiences.length > 0 && (
            <>
              <h3>Work Experience</h3>
              {data.experiences.map((exp, idx) => (
                <div className="job-section" key={idx}>
                  <p className="job-title">
                    {exp.jobTitle} @ {exp.companyName}
                  </p>
                  <p className="job-duration">
                    {exp.startDate} - {exp.endDate}
                  </p>
                  <p className="job-location">{exp.location}</p>
                  <p className="job-description">{exp.description}</p>
                </div>
              ))}
            </>
          )}

          {/* Education */}
          {(data.schoolName || data.qualification || data.fieldOfStudy) && (
            <>
              <h3>Education</h3>
              <p>
                <strong>{data.qualification}</strong> in {data.fieldOfStudy}
              </p>
              <p>{data.schoolName}</p>
              <p>
                {data.startDate} - {data.endDate}
              </p>
            </>
          )}

          {/* Certifications */}
          {Array.isArray(data.certifications) &&
            data.certifications.length > 0 && (
              <>
                <h3>Certifications</h3>
                {data.certifications.map((cert, idx) => (
                  <div key={idx}>
                    <p>
                      <strong>{cert.Certificate}</strong> -{" "}
                      {cert.issuingOrganization}
                    </p>
                    <p>
                      {cert.issueDate} - {cert.endDate}
                    </p>
                    <p>{cert.description}</p>
                  </div>
                ))}
              </>
            )}

          {/* Projects */}
          {Array.isArray(data.projects) && data.projects.length > 0 && (
            <>
              <h3>Projects</h3>
              {data.projects.map((project, idx) => (
                <div key={idx}>
                  <p>
                    <strong>{project.title}</strong>
                  </p>
                  <p>{project.description}</p>
                  {project.technologies.length > 0 && (
                    <p>
                      <strong>Tech:</strong> {project.technologies.join(", ")}
                    </p>
                  )}
                  {project.links.length > 0 && (
                    <p>
                      <strong>Links:</strong>{" "}
                      {project.links.map((link, i) => (
                        <a key={i} href={link} target="_blank" rel="noreferrer">
                          {link}
                        </a>
                      ))}
                    </p>
                  )}
                </div>
              ))}
            </>
          )}

          {/* Volunteer Experience */}
          {Array.isArray(data.volunteers) && data.volunteers.length > 0 && (
            <>
              <h3>Volunteer Experience</h3>
              {data.volunteers.map((entry, idx) => (
                <div key={idx}>
                  <p>
                    <strong>{entry.role}</strong> at {entry.organization}
                  </p>
                  <p>
                    {entry.year} - {entry.duration}
                  </p>
                  <p>{entry.description}</p>
                </div>
              ))}
            </>
          )}

          {/* Hobbies */}
          {Array.isArray(data.hobbies) && data.hobbies.length > 0 && (
            <>
              <h3>Hobbies</h3>
              <ul>
                {data.hobbies.map((hobby, idx) => (
                  <li key={idx}>
                    {hobby.hobby} ({hobby.proficiency})
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h4>Contact</h4>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p>
            <strong>Phone:</strong> {data.phoneNumber || data.phone}
          </p>
          <p>
            <strong>City:</strong> {data.city}
          </p>
          <p>
            <strong>Country:</strong> {data.country}
          </p>
          <p>
            <strong>Postal Code:</strong> {data.postalCode}
          </p>

          {/* Links */}
          {Array.isArray(data.links) && data.links.length > 0 && (
            <>
              <h4>Links</h4>
              {data.links.map((link, idx) =>
                link?.trim() ? (
                  <p key={idx}>
                    <a href={link} target="_blank" rel="noreferrer">
                      {link}
                    </a>
                  </p>
                ) : null
              )}
            </>
          )}

          {/* Skills */}
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

          {/* Tools */}
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

          {/* Languages */}
          {Array.isArray(data.languages) && data.languages.length > 0 && (
            <>
              <h4>Languages</h4>
              <ul className="languages">
                {data.languages.map((lang, idx) => (
                  <li key={idx}>
                    {lang.language} - {lang.proficiency}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TemplatePreview;
