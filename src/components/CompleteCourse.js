import { useNavigate } from "react-router-dom";

import React from 'react'

function CompleteAndContinueButton(props) {
    const navigate = useNavigate()
    function completeAndContinue () {
        navigate(`/courses/${props.courseId}/finishedcourse`)
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

  return (
    <button className="button primary complete btn" onClick={completeAndContinue}>
       Complete Course
    </button>
  )
}

export default CompleteAndContinueButton