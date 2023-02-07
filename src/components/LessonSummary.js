import { Link } from 'react-router-dom'
import React from 'react'

function LessonSummary(props) {
  return (
    <section key={props.lesson.id} className="summary">
        <div>
            <div className='title'>
                <h2>
                    <Link
                        className='no-underline cursor-pointer'
                        to={'/courses/' + props.courseId + '/lessons/' + props.lesson.id}>
                            {props.lesson.id > 0 ? props.num - 1 + '. ' + props.lesson.title : props.lesson.title}
                        </Link>
                </h2>
            </div>
            <p>
                <Link
                    className='no-underline cursor-pointer'
                    to={'/courses/' + props.courseId + '/lessons/' + props.lesson.id}
                    >
                        {props.lesson.description}
                    </Link>
            </p>
        </div>
    </section>
  )
}

export default LessonSummary