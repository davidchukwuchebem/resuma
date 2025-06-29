import React from "react";

const ResumePreview = ({ data }) => {
  return (
      <>
      <div className="preview-wrapper">
      <div className="resume-preview">
      <h1>{data.fullName}</h1>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Phone:</strong> {data.phone}</p>
      <h3>Summary</h3>
      <p>{data.summary}</p>
      <h3>Experience</h3>
      <p>{data.experience}</p>
      <h3>Education</h3>
      <p>{data.education}</p>
    </div>
    </div>
    </>
  );
};

export default ResumePreview;
