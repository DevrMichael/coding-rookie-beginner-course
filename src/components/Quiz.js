import React, { useState } from "react";
import { useParams } from "react-router-dom";
import courses from "../courses";

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
    if(currentQuestion + 1 < lesson.quizQuestions.length){
        setCurrentQuestion(currentQuestion + 1);
    } else {
        setShowFinalResults(true);
    }
  }

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowFinalResults(false);
  }

  return (
    <div>
      <h1>Quiz</h1>

      <h2>Current Score: {score}</h2>
      {showFinalResults ? (
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>{score} out of {lesson.quizQuestions.length} correct - ({(score/lesson.quizQuestions.length) * 100} percent)</h2>
          <button onClick={() => restartGame()}>Restart Game</button>
        </div>
      ) : (
        <div className="question-card">
          <h2>
            Question {currentQuestion + 1} out of {lesson.quizQuestions.length}
          </h2>
          <h3>{lesson.quizQuestions[currentQuestion].text}</h3>
          <ul>
            {lesson.quizQuestions[currentQuestion].options.map((option) => {
                return (
                    <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
                );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quiz;