import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Lesson from './pages/Lesson'
import Course from './pages/Course'

function App() {
  return (
    <div className='App'>
      <main>
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
          <Route 
            path="/courses/:courseId"
            element={<Course />}
          />
          <Route 
            path="/courses/:courseId/lessons/:lessonId"
            element={<Lesson />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
