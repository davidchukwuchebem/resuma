import React from "react";

const Personal = ({ data, setData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="form-container">
      <h2>Personal Information</h2>
      <input name="fullName" placeholder="Full Name" value={data.fullName} onChange={handleChange} />
      <input name="email" placeholder="Email" value={data.email} onChange={handleChange} />
      <input name="phone" placeholder="Phone" value={data.phone} onChange={handleChange} />
      <textarea name="summary" placeholder="Summary" value={data.summary} onChange={handleChange} />
      <textarea name="experience" placeholder="Experience" value={data.experience} onChange={handleChange} />
      <textarea name="education" placeholder="Education" value={data.education} onChange={handleChange} />
    </div>
  );
};

export default Personal;
