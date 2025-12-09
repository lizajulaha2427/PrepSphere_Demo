import React, { useState } from "react";
import "./LessonItem.css";

const LessonItem = ({ lesson, completed, onComplete }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`lesson-item-wrapper`}>
      {/* LESSON HEADER */}
      <div
        className={`lesson-item ${completed ? "completed" : ""}`}
      >
        <span
          className="lesson-title"
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: "pointer" }}
        >
          {lesson.title}
        </span>

        <button
          className="lesson-btn"
          disabled={completed}
          onClick={onComplete}
        >
          {completed ? "Completed ✔" : "Mark as Complete"}
        </button>
      </div>

      {/* EXPANDED CONTENT — visible below only THIS lesson */}
      {isOpen && (
        <div className="lesson-content">
          <p>{lesson.content}</p>

          {lesson.videoUrl && (
            <div className="lesson-video">
              <iframe
                width="100%"
                height="450"
                src={lesson.videoUrl}
                title="Lesson Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LessonItem;
