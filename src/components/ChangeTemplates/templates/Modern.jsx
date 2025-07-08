import "../../../styles/modern.css";


const Modern = ({ data }) => {
  return (
    <div className="preview-wrapper">
      <div className="resume-preview modern-theme">
        <div className="header-section">
          {data.profileImage && (
            <img src={data.profileImage} alt="Profile" className="modern-photo" />
          )}
          <div className="header-text">
            <h1>{data.fullName}</h1>
            <p className="modern-role">{data.profession}</p>
            <p className="modern-summary">{data.summary}</p>
          </div>
        </div>

        <div className="modern-main">
          <div className="modern-left">
            {/* Experience */}
            {Array.isArray(data.experiences) && data.experiences.length > 0 && (
              <div className="section">
                <h3>Experience</h3>
                {data.experiences.map((exp, idx) => (
                  <div key={idx} className="item">
                    <h4>{exp.jobTitle}</h4>
                    <p className="light">{exp.companyName} | {exp.location}</p>
                    <p className="light">{exp.startDate} - {exp.endDate}</p>
                    <p>{exp.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Projects */}
            {Array.isArray(data.projects) && data.projects.length > 0 && (
              <div className="section">
                <h3>Projects</h3>
                {data.projects.map((project, idx) => (
                  <div key={idx} className="item">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    {project.technologies.length > 0 && (
                      <p className="light">Tech: {project.technologies.join(', ')}</p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Education */}
            {Array.isArray(data.education) && data.education.length > 0 && (
              <div className="section">
                <h3>Education</h3>
                {data.education.map((edu, idx) => (
                  <div key={idx} className="item">
                    <h4>{edu.qualification} in {edu.fieldOfStudy}</h4>
                    <p className="light">{edu.schoolName}</p>
                    <p className="light">{edu.startDate} - {edu.endDate}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="modern-right">
            <div className="section">
              <h3>Contact</h3>
              <p>Email: {data.email}</p>
              <p>Phone: {data.phoneNumber}</p>
              <p>City: {data.city}</p>
              <p>Country: {data.country}</p>
              <p>Postal Code: {data.postalCode}</p>
            </div>

            {Array.isArray(data.skills) && data.skills.length > 0 && (
              <div className="section">
                <h3>Skills</h3>
                <ul>
                  {data.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}

            {Array.isArray(data.tools) && data.tools.length > 0 && (
              <div className="section">
                <h3>Tools</h3>
                <ul>
                  {data.tools.map((tool, idx) => (
                    <li key={idx}>{tool}</li>
                  ))}
                </ul>
              </div>
            )}

            {Array.isArray(data.languages) && data.languages.length > 0 && (
              <div className="section">
                <h3>Languages</h3>
                <ul>
                  {data.languages.map((lang, idx) => (
                    <li key={idx}>{lang.language} - {lang.proficiency}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modern;
