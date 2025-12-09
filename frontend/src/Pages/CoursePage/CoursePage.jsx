import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { courses } from "../../data/coursesData";
import LessonItem from "./LessonItem";
import './CoursePage.css';

const CoursePage = () => {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId);

  const [completed, setCompleted] = useState([]);

  const handleComplete = (section) => {
    if (!completed.includes(section)) {
      setCompleted([...completed, section]);

      // Later integrate your backend API call:
      console.log({
        course: course.title,
        completedSection: section,
        date: new Date().toISOString()
      });
    }
  };

  const progress =
    Math.round((completed.length / course.sections.length) * 100);

  return (
    <div className="course-page-box">
      <h1>{course.title}</h1>
      <p className="progress-bar">Progress: {progress}%</p>

      <div className="sections-container">
        {course.sections.map((section, index) => (
          <LessonItem
            key={index}
            title={section}
            completed={completed.includes(section)}
            onComplete={() => handleComplete(section)}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
