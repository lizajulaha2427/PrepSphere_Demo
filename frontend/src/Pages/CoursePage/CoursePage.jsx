import React, { useState, useEffect } from "react"; // ✅ add useEffect
import { useParams } from "react-router-dom";
import { courses } from "../../data/coursesData";
import LessonItem from "./LessonItem";
import "./CoursePage.css";

const CoursePage = () => {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId);

  const [completed, setCompleted] = useState([]);

  // ✅ Fetch saved progress when page loads
  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:4000/api/progress", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();

        const lessonsCompleted = data
          .filter(p => p.courseName === course.title)
          .map(p => p.lessonName);

        setCompleted(lessonsCompleted);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProgress();
  }, [course.title]);

  const handleComplete = async (lessonName) => {
    if (!completed.includes(lessonName)) {
      const newCompleted = [...completed, lessonName];
      setCompleted(newCompleted);

      const progressPercent = Math.round(
        (newCompleted.length / course.sections.length) * 100
      );

      try {
        const token = localStorage.getItem("token");
        await fetch("http://localhost:4000/api/progress", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            courseName: course.title,
            lessonName,
            progress: progressPercent,
          }),
        });
      } catch (err) {
        console.error("Error saving progress:", err);
      }
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
            completed={completed.includes(lesson.title)}
            onComplete={() => handleComplete(lesson.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
