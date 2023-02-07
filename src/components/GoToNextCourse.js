import { useNavigate } from "react-router-dom";

import React from 'react'

function GoToNextCourse(props) {
    const navigate = useNavigate()
    function goToNextCourse () {
        navigate(`/courses/${parseInt(props.courseId) + 1}/`)
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

  return (
    <button className="button primary complete btn" onClick={goToNextCourse}>
       Start the next course
    </button>
  )
}

export default GoToNextCourse