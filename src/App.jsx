import { useState } from 'react';

import Quizzical from './components/Quiz/Quizzical';
import StartQuiz from './components/Quiz/StartQuiz';
import QuizQuestions from './components/Quiz/QuizQuestions';

function App() {

  const [isQuizStarting, setQuizStart] = useState(true);

  function handleQuizStart() {
    setQuizStart(prevQuizStart => !prevQuizStart)
  }

  return (
    <>
      <Quizzical>
        {/* {isQuizStarting ? <StartQuiz startQuizScreen={handleQuizStart} /> : <QuizQuestions />} */}
        <QuizQuestions />
      </Quizzical>
    </>
  )
}

export default App
