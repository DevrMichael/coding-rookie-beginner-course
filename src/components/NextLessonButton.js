import { useNavigate } from "react-router-dom";

import React from 'react'

function NextLessonButton({courseId, lessonId, setActiveButton}) {
    const navigate = useNavigate()
    function nextLesson () {
        navigate(`/courses/${courseId}/lessons/${lessonId}`)
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        setActiveButton(lessonId)
      };

  return (
    <button className="button primary complete btn" onClick={nextLesson}>
       Next Lesson
    </button>
  )
}

export default NextLessonButton