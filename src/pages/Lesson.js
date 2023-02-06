import { Link, useParams } from "react-router-dom";
import courses from "../courses";
import React, { useEffect } from "react";
import Vimeo from "@u-wave/react-vimeo";
import CompleteAndContinueButton from "../components/CompleteAndContinueButton";
import Prism from "prismjs";
import "prismjs/themes/prism-vsc-dark-plus.css";
import GoToQuizButton from "../components/GoToQuizButton";

function Lesson() {
  const { courseId, lessonId } = useParams();
  const course = courses.find((course) => course.id === parseInt(courseId));
  const lesson = course.lessons.find(
    (lesson) => lesson.id === parseInt(lessonId)
  );
  const nextLessonId = () => {
    const currentIndex = course.lessons.indexOf(lesson);
    const nextIndex = (currentIndex + 1) % course.lessons.length;
    return course.lessons[nextIndex].id;
  };

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="Lesson page">
      <header>
        <p>
          <Link to={"/courses/" + course.id}>Back to {course.title}</Link>
        </p>
        <h1>{lesson.title}</h1>
      </header>
      <div className="Content">
        <div className="posts">
          <div>
            <p>{lesson.introduction}</p>
            {lesson.image && <img src={`${lesson.image}`} alt="random-pic" />}
            <p>{lesson.body}</p>
            {lesson.codesnippet && (
              <pre className={"language-javascript"}>
                <code>{lesson.codesnippet}</code>
              </pre>
            )}
            <p>{lesson.summary}</p>
            <Vimeo video={lesson.vimeoId} responsive />
          </div>
        </div>
        <CompleteAndContinueButton
          courseId={courseId}
          lessonId={nextLessonId()}
        />
        {lesson.quizQuestions && <GoToQuizButton
          courseId={courseId}
          lessonId={lessonId}
        />}
      </div>
    </div>
  );
}

export default Lesson;
