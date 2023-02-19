import React from "react";
import courses from "../data/courses";
import CourseSummary from "../pages/CourseSummary";

function Home() {
  return (
    <div className="Home page">
      <header>
        <h1>Coding Rookie Software Developer Roadmap</h1>
      </header>
      <div className="courseSummary">
        {courses.map((course) => (
          <CourseSummary course={course} key={course.id} />
        ))}
      </div>
      <footer>
        <h1 className="navBtns">Coding Rookie</h1>
        <h2 className="navBtns">Terms & Conditions</h2>
      </footer>
    </div>
  );
}

export default Home;
