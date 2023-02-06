import { useNavigate } from "react-router-dom";

import React from 'react'

function GoToQuizButton(props) {
    const navigate = useNavigate()
    function goToQuiz () {
        navigate(`/courses/${props.courseId}/lessons/${props.lessonId}/quiz`)
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

  return (
    <button className="button primary complete btn" onClick={goToQuiz}>
        Go To Quiz
    </button>
  )
}

export default GoToQuizButton