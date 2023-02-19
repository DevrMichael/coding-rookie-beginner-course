import { useNavigate } from "react-router-dom";

import React from "react";

function PreviousLessonButton({courseId, lessonId, setActiveButton}) {
  const navigate = useNavigate();
  function previousLesson() {
    if ((lessonId - 1) === 1) {
      navigate(`/courses/${courseId}/lessons/0`);
    } else {
      navigate(`/courses/${courseId}/lessons/${lessonId - 2}`);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setActiveButton(lessonId - 2)
  }

  return (
    <button
      className="button primary complete btn"
      onClick={previousLesson}
    >
     Go Back
    </button>
  );
}

export default PreviousLessonButton;
