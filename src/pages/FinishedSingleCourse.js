import React from "react";
import { useParams } from "react-router-dom";
import GoToNextCourse from "../components/GoToNextCourse";
import courses from "../courses";

function FinishedSingleCourse() {
  const { courseId } = useParams();
  const course = courses.find((course) => course.id === parseInt(courseId));

  return (
    <>
      <h1>Congratulations!</h1>
      <h2>You completed the {course.title} course!</h2>
      {courseId < 3 && <GoToNextCourse courseId={courseId}/>}
    </>
  );
}

export default FinishedSingleCourse;
