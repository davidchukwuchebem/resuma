// File: src/components/ChangeTemplates/templates/Functional.jsx
import "../../../styles/functional.css";

const Functional = ({ data }) => {
  return (
    <div className="preview-wrapper">
      <div className="functional-resume functional-theme">
        <div className="functional-header">
          {data.profileImage && (
            <img
              src={data.profileImage}
              alt="Profile"
              className="resume-photo"
            />
          )}
          <div>
            <h1>{data.fullName}</h1>
            <p className="role-title">{data.profession}</p>
            <p className="summary">{data.summary}</p>
          </div>
        </div>

        <div className="functional-columns">
          <div className="left">
            <section>
              <h3 className="functional-section-title">Skills</h3>
              <ul>
                {data.skills?.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="functional-section-title">Tools</h3>
              <ul>
                {data.tools?.map((tool, idx) => (
                  <li key={idx}>{tool}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="functional-section-title">Languages</h3>
              <ul>
                {data.languages?.map((lang, idx) => (
                  <li key={idx}>{lang.language} - {lang.proficiency}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="functional-section-title">Contact</h3>
              <p>{data.email}</p>
              <p>{data.phoneNumber}</p>
              <p>{data.city}, {data.country} {data.postalCode}</p>
              {data.links?.map((link, idx) => (
                <a href={link} key={idx} target="_blank" rel="noreferrer">{link}</a>
              ))}
            </section>
          </div>

          <div className="right">
            <section>
              <h3 className="functional-section-title">Work Experience</h3>
              {data.experiences?.map((exp, idx) => (
                <div key={idx}>
                  <h4>{exp.jobTitle} @ {exp.companyName}</h4>
                  <p>{exp.startDate} - {exp.endDate}</p>
                  <p>{exp.location}</p>
                  <p>{exp.description}</p>
                </div>
              ))}
            </section>

            <section>
              <h3 className="functional-section-title">Education</h3>
              {data.education?.map((edu, idx) => (
                <div key={idx}>
                  <h4>{edu.qualification} in {edu.fieldOfStudy}</h4>
                  <p>{edu.schoolName}</p>
                  <p>{edu.startDate} - {edu.endDate}</p>
                </div>
              ))}
            </section>

            <section>
              <h3 className="functional-section-title">Certifications</h3>
              {data.certifications?.map((cert, idx) => (
                <div key={idx}>
                  <p><strong>{cert.Certificate}</strong> - {cert.issuingOrganization}</p>
                  <p>{cert.issueDate} - {cert.endDate}</p>
                  <p>{cert.description}</p>
                </div>
              ))}
            </section>

            <section>
              <h3 className="functional-section-title">Projects</h3>
              {data.projects?.map((project, idx) => (
                <div key={idx}>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  {project.technologies.length > 0 && (
                    <p><strong>Tech:</strong> {project.technologies.join(", ")}</p>
                  )}
                  {project.links.length > 0 && (
                    <p><strong>Links:</strong> {project.links.join(", ")}</p>
                  )}
                </div>
              ))}
            </section>

            <section>
              <h3 className="functional-section-title">Volunteer Experience</h3>
              {data.volunteers?.map((entry, idx) => (
                <div key={idx}>
                  <h4>{entry.role} - {entry.organization}</h4>
                  <p>{entry.year} - {entry.duration}</p>
                  <p>{entry.description}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Functional;
