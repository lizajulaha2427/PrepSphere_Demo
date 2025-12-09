import React from "react";
import './LessonItem.css';


const LessonItem = ({ title, completed, onComplete }) => {
  return (
    <div className={`lesson-item ${completed ? "completed" : ""}`}>
      <span className="lesson-title">{title}</span>

      <button
        className="lesson-btn"
        disabled={completed}
        onClick={onComplete}
      >
        {completed ? "Completed ✔" : "Mark as Complete"}
      </button>
    </div>
  );
};

export default LessonItem;
