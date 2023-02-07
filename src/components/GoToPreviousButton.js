import { useNavigate } from "react-router-dom";

import React from "react";

function GoToPreviousButton(props) {
  const navigate = useNavigate();
  function goToPrevious() {
    if ((props.lessonId - 1) === 1) {
      navigate(`/courses/${props.courseId}/lessons/0`);
    } else {
      navigate(`/courses/${props.courseId}/lessons/${props.lessonId}`);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      className="button primary complete btn"
      onClick={goToPrevious}
    >
     Go Back
    </button>
  );
}

export default GoToPreviousButton;
