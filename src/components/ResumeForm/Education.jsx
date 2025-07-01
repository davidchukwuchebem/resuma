import React from "react";

const Education = ({ data, setData,goBack, goToNextStep }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      <h2>Education Information</h2>

      <div className="form-group">
        <label htmlFor="schoolName">School Name</label>
        <input
          type="text"
          name="schoolName"
          value={data.schoolName || ""}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="qualification">Qualification</label>
        <input
          type="text"
          name="qualification"
          value={data.qualification || ""}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="fieldOfStudy">Field of Study</label>
        <input
          type="text"
          name="fieldOfStudy"
          value={data.fieldOfStudy || ""}
          onChange={handleChange}
        />
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={data.startDate || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            name="endDate"
            value={data.endDate || ""}
            onChange={handleChange}
          />
        </div>
      </div>

       <div className="button-group">
        <button className="back-btn" onClick={goBack}>Back</button>
        <button className="next-btn" onClick={goToNextStep}>Next</button>
      </div>
    </div>
  );
};

export default Education;
