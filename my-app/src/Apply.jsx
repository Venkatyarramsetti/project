import React, { useState } from "react";
import "./Apply.css";
import { useNavigate } from "react-router-dom";
const Apply = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileSelected, setFileSelected] = useState(false);

  const handleUploadChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileSelected(true);
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
        }
      }, 100);
    }
  };

  const isUploadComplete = uploadProgress >= 100;

  return (
    <div className="apply-container">
      <div className="apply-box">
        <h2 className="title">Upload Your Resume</h2>
        <input
          type="file"
          onChange={handleUploadChange}
          className="file-input"
        />
        {fileSelected && (
          <div className="upload-bar-container">
            <div
              className="upload-bar"
              style={{ width: `${uploadProgress}%` }}
            ></div>
            <span className="upload-percentage">{uploadProgress}%</span>
          </div>
        )}
        <button
          className="submit-btn"
          disabled={!isUploadComplete}
          onClick={() => alert("Resume submitted!")}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Apply;
