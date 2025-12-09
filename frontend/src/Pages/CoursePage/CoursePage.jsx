import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { courses } from "../../data/coursesData";
import LessonItem from "./LessonItem";
import "./CoursePage.css";

const CoursePage = () => {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId);

  const [completed, setCompleted] = useState([]);

  const handleComplete = (lessonId) => {
    if (!completed.includes(lessonId)) {
      setCompleted([...completed, lessonId]);
    }
  };

  const progress = Math.round(
    (completed.length / course.sections.length) * 100
  );

  return (
    <div className="course-page-box">
      <h1>{course.title}</h1>

      <p className="progress-bar">Progress: {progress}%</p>

      <div className="sections-container">
        {course.sections.map((lesson) => (
          <LessonItem
            key={lesson.id}
            lesson={lesson}
            completed={completed.includes(lesson.id)}
            onComplete={() => handleComplete(lesson.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
