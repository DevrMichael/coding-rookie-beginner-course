import { Link, useNavigate, useParams } from "react-router-dom";
import courses from "../courses";
import React, { useEffect, useState } from "react";
import Vimeo from "@u-wave/react-vimeo";
import CompleteAndContinueButton from "../components/CompleteAndContinueButton";
import Prism from "prismjs";
import "prismjs/themes/prism-vsc-dark-plus.css";
import GoToQuizButton from "../components/GoToQuizButton";
import GoToPreviousButton from "../components/GoToPreviousButton";
import CompleteCourse from "../components/CompleteCourse";

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
  const prevLessonId = () => {
    const currentIndex = course.lessons.indexOf(lesson);
    const nextIndex = (currentIndex + 1) % course.lessons.length;
    return course.lessons[nextIndex].id;
  };

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const navigate = useNavigate();

  const [activeButton, setActiveButton] = useState(0);

  return (
    <div className="Lesson">
      <div className="lesson__side-bar">
        {course.lessons.map((lesson) => (
          <button
            onClick={() => {
              navigate("/courses/" + course.id + "/lessons/" + lesson.id);
              setActiveButton(lesson.id);
            }}
            to={`courses/${course}/lessons/${lesson}`}
            className={`side-bar__btns ${
              activeButton === lesson.id ? "side-bar__active" : ""
            }`}
          >
            {lesson.id !== 0 && lesson.id + "."} {lesson.sidebar_title}{" "}
          </button>
        ))}
      </div>
      <div className="Lesson page">
        <div className="lesson__content">
          <header>
            <p>
              <Link to={"/courses/" + course.id}>Back to {course.title}</Link>
            </p>
            <h1>
              {lessonId > 0 ? lessonId + ". " + lesson.title : lesson.title}
            </h1>
          </header>
          <div className="Content">
            <div className="posts">
              <div>
                <p>{lesson.introduction}</p>
                {lesson.image && (
                  <img src={`${lesson.image}`} alt="random-pic" />
                )}
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
            <div className="lessonNavigateBtns">
              <div className="newLessonBtns">
                {lessonId > 0 && (
                  <GoToPreviousButton
                    setActiveButton={setActiveButton}
                    courseId={courseId}
                    lessonId={prevLessonId()}
                  />
                )}
                {lessonId < 15 ? (
                  <CompleteAndContinueButton
                    setActiveButton={setActiveButton}
                    courseId={courseId}
                    lessonId={nextLessonId()}
                  />
                ) : (
                  <CompleteCourse courseId={courseId} />
                )}
              </div>
              <div className="goToQuizBtn">
                {lesson.quizQuestions && (
                  <GoToQuizButton courseId={courseId} lessonId={lessonId} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lesson;
