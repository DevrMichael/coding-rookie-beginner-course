import { Link, useNavigate } from 'react-router-dom'
import React from 'react'

function CourseSummary(props) 
{
    const navigate = useNavigate();

    const goToCoursePage = () => {
        navigate('/courses/' + props.course.id)
    }

  return (
    <section key={props.course.id} className={`summary ${(props.course.id === 3) && 'span-col-2'}`}>
        <div onClick={goToCoursePage}>
        <h1 className='courseNumber'>{props.course.id}.</h1> 
            <div className='title'>
                <h1>
                    <Link
                        className="no-underline cursor-pointer course-title"
                        to={'/courses/' + props.course.id}
                        >
                            {props.course.title}
                    </Link>
                </h1>
            </div>
            {/* <p>
                <Link
                    className="no-underline cursor-pointer"
                    to={'/courses/' + props.course.id}>
                        {props.course.description}
                </Link>
            </p> */}
            <a href={'/courses/' + props.course.id} className='courseBtn no-underline'>Begin</a>
        </div>
    </section>
  )
}


export default CourseSummary