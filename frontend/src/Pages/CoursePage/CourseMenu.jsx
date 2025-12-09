import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../../data/coursesData";
import './CourseMenu.css';

const CourseMenu = () => {
  return (
    <div className="course-menu-container">
      <h1>Available Courses</h1>
      <div className="course-list">
        {courses.map((course) => (
          <Link
            key={course.id}
            to={`/courses/${course.id}`}
            className="course-card"
          >
            {course.title}
           <img 
              src={course.image} 
              alt={course.title}
              className="course-image"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseMenu;
