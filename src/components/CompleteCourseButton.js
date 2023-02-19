import { useNavigate } from "react-router-dom";

import React from 'react'

function CompleteCourseButton(props) {
    const navigate = useNavigate()
    function completeCourse () {
        navigate(`/courses/${props.courseId}/finishedcourse`)
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

  return (
    <button className="button primary complete btn" onClick={completeCourse}>
       Complete Course
    </button>
  )
}

export default CompleteCourseButton