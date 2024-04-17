import { useState } from 'react';

import Quizzical from './components/Quiz/Quizzical';
import StartQuiz from './components/Quiz/StartQuiz';

function App() {

  return (
    <>
      <Quizzical>
        <StartQuiz />
      </Quizzical>
    </>
  )
}

export default App
