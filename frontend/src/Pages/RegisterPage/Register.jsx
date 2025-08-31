import React, { useState } from "react";
import { Laptop, Braces, Map, Briefcase, Sparkles, ArrowLeft } from "lucide-react";
import "./Register.css";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [step, setStep] = useState(0); // 0 = video, 1 = goals, 2 = years, 3 = register
  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedYears, setSelectedYears] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent form reload
    // 👉 here you can handle saving form data, API calls etc.
    navigate("/"); // redirect to home
  };

  const goals = [
    { id: 1, text: "CS Fundamentals", icon: <Laptop className="icon" /> },
    { id: 2, text: "DSA", icon: <Braces className="icon" /> },
    { id: 3, text: "Roadmaps", icon: <Map className="icon" /> },
    { id: 4, text: "Interview Preparations", icon: <Briefcase className="icon" /> },
    { id: 5, text: "All of Them", icon: <Sparkles className="icon" /> },
  ];

  const years = [
    { id: 1, text: "1st Year" },
    { id: 2, text: "2nd Year" },
    { id: 3, text: "3rd Year" },
    { id: 4, text: "4th Year" },
  ];

  // Progress width = percentage of steps completed
  const progress = ((step + 1) / 4) * 100;

  // Toggle multi-select
  const handleYearSelect = (year) => {
    if (selectedYears.includes(year)) {
      setSelectedYears(selectedYears.filter((y) => y !== year));
    } else {
      setSelectedYears([...selectedYears, year]);
    }
  };

  return (
    <div className="register-screen">
      {/* Progress Bar */}
      <div className="progress-container">
        {step > 0 && (
          <button className="back-btn" onClick={() => setStep(step - 1)}>
            <ArrowLeft size={22} />
          </button>
        )}
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {/* STEP 0: Video */}
      {step === 0 && (
        <div className="intro-section">
          <video
            className="intro-video"
            src="/Lumi.mp4"
            autoPlay
            muted
          />
          <button onClick={() => setStep(1)} className="continue-btn">
            Continue
          </button>
        </div>
      )}

      {/* STEP 1: Single select (Goal) */}
      {step === 1 && (
        <div className="options-section">
          <h2 className="options-title">What do you want to focus on?</h2>

          <div className="options-list">
            {goals.map((goal) => (
              <button
                key={goal.id}
                className={`option-card ${selectedGoal === goal.text ? "selected" : ""}`}
                onClick={() => setSelectedGoal(goal.text)}
              >
                <span className="icon">{goal.icon}</span> {goal.text}
              </button>
            ))}
          </div>

          <button
            className="continue-btn"
            disabled={!selectedGoal}
            onClick={() => setStep(2)}
          >
            Continue
          </button>
        </div>
      )}

      {/* STEP 2: Multi select (Year) */}
      {step === 2 && (
        <div className="options-section">
          <h2 className="options-title">Which year do you want to study?</h2>

          <div className="options-list">
            {years.map((year) => (
              <button
                key={year.id}
                className={`option-card ${selectedYears.includes(year.text) ? "selected" : ""}`}
                onClick={() => handleYearSelect(year.text)}
              >
                {year.text}
              </button>
            ))}
          </div>

          <button
            className="continue-btn"
            disabled={selectedYears.length === 0}
            onClick={() => setStep(3)}
          >
            Continue
          </button>
        </div>
      )}

      {/* STEP 3: Register Page */}
      {step === 3 && (
        <div className="options-section">
          <h2 className="options-title">Create Your Account</h2>
          <form onSubmit={handleSubmit} className="register-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="continue-btn">Register</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Register;
