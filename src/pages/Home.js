import React from 'react'
import courses from '../courses'
import CourseSummary from '../components/CourseSummary'

function Home() {

  return (
    <div className='Home page'>
        <header>
            <h1>Coding Rookie Software Developer Roadmap</h1>
            <p>Learn and dive into all the necessary aspects of programming that will get you a job within a year.</p>
        </header>
        {courses.map((course) => (
            <CourseSummary course={course} key={course.id} />
        ))}
    </div>
  )
}

export default Home;