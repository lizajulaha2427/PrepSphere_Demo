import { useNavigate } from "react-router-dom";
import StepCard from "./StepCard";
import './RoadMap.css';


import onboarding from "../../assets/onboarding.png";
import building from "../../assets/building-block.png";  
import rocket from "../../assets/rocket.png";             
import softskills from "../../assets/soft-skills.png";
import target from "../../assets/target.png";
import test from "../../assets/test.png";

export default function Roadmap() {
  const navigate = useNavigate();
  const steps = [
    { icon: "⬆", label: "Onboarding", img: onboarding },
    { icon: "🧊", label: "Foundations", img: building },
    { icon: "💪", label: "Skill Builder", img: softskills },
    { icon: "🧪", label: "Practice", img: target },
    { icon: "📋", label: "Test Yourself", img: test },
    { icon: "🚀", label: "Launch Ready", img: rocket },
  ];

  return (
    <div>
      {/* Roadmap section */}
      <div className="roadmap-container">
        {/* Left side - Steps */}
        <div className="steps-list">
          {steps.map((step, i) => (
            <StepCard key={i} icon={step.icon} label={step.label} />
          ))}
        </div>

        {/* Right side - Roadmap Path */}
        <div className="roadmap-path">
          <h1 className="title">
            {"ROADMAP".split("").map((char,i)=>(
              <span key={i}>{char}</span>

            ))}
          </h1>
          <p className="subtitle">
            Your journey to mastery starts here — step by step, month to month.
          </p>

          <div className="path">
            {steps.map((step, index) => (
              <div className="circle-wrapper" key={index}>
                <div className={`circle`}>
                  <img src={step.img} alt={step.label} />
                </div>
                {index < steps.length - 1 && <div className="line"></div>}
              </div>
            ))}
          </div>

          <button className="next-btn" onClick={() => navigate("/fields")}>NEXT STEP →</button>
        </div>
      </div>
    </div>
  );
}