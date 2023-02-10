import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Lesson from "./pages/Lesson";
import Course from "./pages/Course";
import SignUp from "./pages/SignUp"
import Login from "./pages/Login";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase-config";
import Quiz from "./components/Quiz";
import FinishedSingleCourse from "./pages/FinishedSingleCourse";
import FAQ from "./pages/FAQ";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  let navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };
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
            {isAuth ? <button className="button primary" onClick={signUserOut}>
              Log Out
            </button> : <Link className="button primary" to="/login">
              Login
            </Link>}
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
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
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
