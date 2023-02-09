import { useNavigate } from "react-router-dom";

import React from 'react'

function CompleteAndContinueButton({courseId, lessonId, setActiveButton}) {
    const navigate = useNavigate()
    function completeAndContinue () {
        navigate(`/courses/${courseId}/lessons/${lessonId}`)
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        setActiveButton(lessonId)
      };

  return (
    <button className="button primary complete btn" onClick={completeAndContinue}>
       Next Lesson
    </button>
  )
}

export default CompleteAndContinueButton