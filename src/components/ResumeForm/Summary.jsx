const Summary = ({ data, setData, goBack, goToNextStep }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="form-container">
     <div className="summary-form-container">
       <h2>Summary & Objective</h2>
      <div className="form-group">
        <label htmlFor="summary">Resume Summary</label>
        <textarea
          name="summary"
          value={data.summary || ""}
          onChange={handleChange}
          rows={4}
          placeholder="Write a brief summary about yourself..."
        />
      </div>

      <div className="button-group">
        <button className="back-btn" onClick={goBack}>Back</button>
        <button className="next-btn" onClick={goToNextStep}>Next</button>
      </div>
     </div>
    </div>
  );
};
export default Summary;