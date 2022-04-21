import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import UserInform from './components/Userinfo';
import { js, java, python } from './components/data';
import Quiz from './components/Quiz';
import Result from './components/Result';
function App() {
  const [username, setUsername] = useState<string>('');
  const [subject, setSubject] = useState('');
  const [que, setQue] = useState(js);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (subject === 'java') {
      setQue(java);
    } else if (subject === 'python') {
      setQue(python);
    } else if (subject === 'js') {
      setQue(js);
    }
  }, [subject]);
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <UserInform
              username={username}
              setUsername={setUsername}
              subject={subject}
              setSubject={setSubject}
              navigate={navigate}
            />
          }
        />
        <Route
          path='/quiz'
          element={
            <Quiz
              navigate={navigate}
              que={que}
              score={score}
              setScore={setScore}
            />
          }
        />
        <Route
          path='/result'
          element={
            <Result
              navigate={navigate}
              que={que}
              username={username}
              score={score}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
