import { useNavigate } from "react-router-dom";

import React from "react";

function GoToPreviousButton({courseId, lessonId, setActiveButton}) {
  const navigate = useNavigate();
  function goToPrevious() {
    if ((lessonId - 1) === 1) {
      navigate(`/courses/${courseId}/lessons/0`);
    } else {
      navigate(`/courses/${courseId}/lessons/${lessonId}`);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setActiveButton(lessonId)
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
