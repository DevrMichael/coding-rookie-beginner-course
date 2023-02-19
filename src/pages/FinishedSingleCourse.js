import React from "react";
import { Link, useParams } from "react-router-dom";
import NextCourseButton from "../components/NextCourseButton";
import courses from "../data/courses";

function FinishedSingleCourse() {
  const { courseId } = useParams();
  const course = courses.find((course) => course.id === parseInt(courseId));

  return (
    <div className="summary">
      <div>
        <h1>Congratulations!</h1>
        <h2>You completed the {course.title} course!</h2>
        {courseId < 3 && <NextCourseButton courseId={courseId} />}
        {courseId == 3 && (
          <>
          <p>The next step is to check out the most frequently asked questions and answers about becoming a frontend developer.</p>
          <br />
            <Link className="button primary" to="/faq">
              Check out our FAQ
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default FinishedSingleCourse;
