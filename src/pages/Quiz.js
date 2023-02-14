import React, { useState } from "react";
import { useParams } from "react-router-dom";
import courses from "../courses";
import CompleteAndContinueButton from "../components/CompleteAndContinueButton";

function Quiz() {
  const [showFinalResults, setShowFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const { courseId, lessonId } = useParams();
  const course = courses.find((course) => course.id === parseInt(courseId));
  const lesson = course.lessons.find(
    (lesson) => lesson.id === parseInt(lessonId)
  );

  //Helper Functions
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < lesson.quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowFinalResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowFinalResults(false);
  };

  const nextLessonId = () => {
    const currentIndex = course.lessons.indexOf(lesson);
    const nextIndex = (currentIndex + 1) % course.lessons.length;
    return course.lessons[nextIndex].id;
  };

  return (
    <div className="quiz-page">
      <h1>Quiz</h1>

      <h2>Current Score: {score}</h2>
      {showFinalResults ? (
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {lesson.quizQuestions.length} correct - (
            {(score / lesson.quizQuestions.length) * 100} percent)
          </h2>
          <button
            className="button primary quiz__restart-btn"
            onClick={() => restartGame()}
          >
            Restart Quiz
          </button>
          <CompleteAndContinueButton
            courseId={courseId}
            lessonId={nextLessonId()}
          />
        </div>
      ) : (
        <div className="question-card">
          <h2>
            Question {currentQuestion + 1} out of {lesson.quizQuestions.length}
          </h2>
          <h3>{lesson.quizQuestions[currentQuestion].text}</h3>
          <ul className="quizBtns">
            {lesson.quizQuestions[currentQuestion].options.map((option) => {
              return (
                <li className="button primary complete btn"
                  onClick={() => optionClicked(option.isCorrect)}
                  key={option.id}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quiz;
