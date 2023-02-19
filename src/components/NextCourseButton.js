import { useNavigate } from "react-router-dom";

import React from 'react'

function NextCourseButton(props) {
    const navigate = useNavigate()
    function nextCourse () {
        navigate(`/courses/${parseInt(props.courseId) + 1}/`)
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

  return (
    <button className="button primary complete btn" onClick={nextCourse}>
       Start the next course
    </button>
  )
}

export default NextCourseButton