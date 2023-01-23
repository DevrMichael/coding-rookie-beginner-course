import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import Lesson from './pages/Lesson'
import Course from './pages/Course'
import Login from './pages/Login'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from './firebase-config'

function App() {
  const [isAuth, setIsAuth] = useState(false)

  let navigate = useNavigate()

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      navigate("/login")
    })
  }
  return (
    <div className='App'>
      <main>
        <nav>
              {isAuth && <Link className='button primary' to="/">Home</Link>}
              {isAuth && <Link className='button primary' to="/course">Course</Link>}
              {!isAuth ? <Link className='button primary' to="/login">Login</Link> : <button className='button primary' onClick={signUserOut}>Log Out</button>}
        </nav>
        <Routes>
          {isAuth && <Route 
            path="/"
            element={<Home />}
          />}
          {isAuth && <Route 
            path="/courses/:courseId"
            element={<Course />}
          />}
          {isAuth && <Route 
            path="/courses/:courseId/lessons/:lessonId"
            element={<Lesson />}
          />}
          <Route 
            path="/login"
            element={<Login setIsAuth={setIsAuth} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
