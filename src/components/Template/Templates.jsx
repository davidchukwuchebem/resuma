import preview from "../../assets/resume-preview.png"; // your resume preview image

export default function Templates() {
  const templates = [
    { id: 1, title: "Essential" },
    { id: 2, title: "Definesd" },
    { id: 3, title: "Education" },
    { id: 4, title: "CV" },
    { id: 5, title: "CV" },
    { id: 6, title: "CV" },
    { id: 7, title: "CV" },
  ];
  return (
    <>
      <div className="template-container">
        {templates.map((template) => (
          <div>
            <div
              key={template.id}
              className="resume-card"
              style={{
                marginTop: 0,
                textAlign: "start",
              }}
            >
              <p>{template.title}</p>
              <img src={preview} alt={template.title} className="resume-img" />
              {/* <div className="resume-footer">
              <p className="resume-title">{resume.title}</p>
              <span className="more-options">⋮</span>
            </div> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
