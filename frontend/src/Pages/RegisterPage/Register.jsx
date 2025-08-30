import React, { useState } from "react";
import "./Register.css"; // Import CSS file

const Register = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleContinue = () => {
    setShowOptions(true);
  };

  return (
    <div className="register-screen">
      {!showOptions ? (
        <div className="intro-section">
          {/* Animation / Video */}
          <div className="progress-line"></div>

          <video
            className="intro-video"
            src="/Lumi.mp4"  // Place Lumi.mp4 in public/
            autoPlay
            muted
          />

          {/* Continue Button */}
          <button onClick={handleContinue} className="continue-btn">
            Continue
          </button>
        </div>
      ) : (
        <div className="options-section">
          <h2 className="options-title">Choose an Option</h2>
          <div className="options-list">
            <button className="option-btn green">Option 1</button>
            <button className="option-btn purple">Option 2</button>
            <button className="option-btn red">Option 3</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
