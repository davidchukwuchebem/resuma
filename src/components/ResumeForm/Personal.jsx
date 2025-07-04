import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faPlus } from "@fortawesome/free-solid-svg-icons";

const Personal = ({ data, setData, goToNextStep }) => {
  const fileInputRef = useRef(null);
  const [links, setLinks] = useState(data.links || [""]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setData((prev) => ({ ...prev, profileImage: url }));
    }
  };

  const triggerFileInput = () => fileInputRef.current.click();

  const handleLinkChange = (index, value) => {
    const updatedLinks = [...links];
    updatedLinks[index] = value;
    setLinks(updatedLinks);
    setData((prev) => ({ ...prev, links: updatedLinks }));
  };

  const addLink = () => {
    const newLinks = [...links, ""];
    setLinks(newLinks);
    setData((prev) => ({ ...prev, links: newLinks }));
  };

  return (
    <div className="form-container">
      <h2>Personal Information</h2>

      {/* Image Upload */}
      <div className="image-upload" onClick={triggerFileInput}>
        {data.profileImage ? (
          <img src={data.profileImage} alt="Profile" className="profile-pic" />
        ) : (
          <FontAwesomeIcon icon={faCamera} size="2x" className="upload-icon" />
        )}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </div>

      {/* Name Input */}
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input name="fullName" value={data.fullName || ""} onChange={handleChange} />
      </div>

      {/* Grid Layout */}
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="profession">Profession Title</label>
          <input name="profession" value={data.profession || ""} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input name="email" value={data.email || ""} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input name="phoneNumber" value={data.phoneNumber || ""} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="postalCode">Postal Code</label>
          <input name="postalCode" value={data.postalCode || ""} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input name="city" value={data.city || ""} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input name="country" value={data.country || ""} onChange={handleChange} />
        </div>
      </div>

      {/* Links Section */}
      <div className="links-section">
        <div className="link-header">
          <label>Links</label>
          <button type="button" className="add-link-btn" onClick={addLink}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        {links.map((link, idx) => (
          <input
            key={idx}
            value={link}
            placeholder="e.g. https://linkedin.com/in/username"
            onChange={(e) => handleLinkChange(idx, e.target.value)}
          />
        ))}
      </div>

    <div className="button-group">
        <button className="next-btn" onClick={goToNextStep}>Next</button>
      </div>
    </div>
  );
};

export default Personal;
