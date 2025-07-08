import preview from "../../assets/resume-preview.png"; // Replace with correct path

export default function Templates({ selectedTemplate, setSelectedTemplate }) {
  const templates = [
    { id: 1, title: "Chronological" },
    { id: 2, title: "Functional" },
    { id: 3, title: "Combination" },
    { id: 4, title: "Creative" },
    { id: 5, title: "Modern" },
    { id: 6, title: "Traditional" },
    { id: 7, title: "Infographic" },
    { id: 8, title: "Targeted" },
  ];

  return (
    <div className="template-container">
      {templates.map((template) => (
        <div
          key={template.id}
          className={`resume-card ${
            selectedTemplate === template.title ? "selected-template" : ""
          }`}
          onClick={() => setSelectedTemplate(template.title)}
          style={{ cursor: "pointer", textAlign: "start", marginTop: 0 }}
        >
          <p>{template.title}</p>
          <img
            src={preview}
            alt={template.title}
            className="resume-img"
          />
        </div>
      ))}
    </div>
  );
}
