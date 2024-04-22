import { useState } from 'react';

import Quizzical from './components/Quiz/Quizzical';
import StartQuiz from './components/Quiz/StartQuiz';
import QuizQuestions from './components/Quiz/QuizQuestions';

function App() {

  return (
    <>
      <Quizzical>
        {/* <StartQuiz /> */}
        <QuizQuestions />
      </Quizzical>
    </>
  )
}

export default App
