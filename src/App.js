import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Lesson from "./pages/Lesson";
import Course from "./pages/Course";
import SignUp from "./pages/SignUp"
import Login from "./pages/Login";
import Quiz from "./components/Quiz";
import FinishedSingleCourse from "./pages/FinishedSingleCourse";
import FAQ from "./pages/FAQ";

function App() {


  return (
    <div className="App">
      <main>
        <nav>
          <div>
            <Link className="button primary" to="/">
              Home
            </Link>
            <Link className="button primary" to="/faq">
              FAQ
            </Link>
          </div>
          <div>
            <Link className="button primary" to="logout">
              Log Out
            </Link>
            <Link className="button primary" to="/login">
              Login
            </Link>
            <Link className="button primary" to="/signup">
              Signup
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/:courseId" element={<Course />} />
          <Route
            path="/courses/:courseId/lessons/:lessonId"
            element={<Lesson />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/courses/:courseId/lessons/:lessonId/quiz"
            element={<Quiz />}
          />
          <Route
            path="/courses/:courseId/finishedcourse"
            element={<FinishedSingleCourse />}
          />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
