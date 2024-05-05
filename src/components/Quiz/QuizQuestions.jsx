import { useState, useEffect } from 'react';
import Button from '../Base/Button';

export default function QuizQuestions() {

  const [quizData, setQuizData] = useState({})

  const url = "https://opentdb.com/api.php?amount=5&category=31&difficulty=medium&type=multiple"
  
  // Fetch the data from the API
  useEffect(() => {

    fetch(url)
      .then(response => response.json())
      .then(data => setQuizData(data))
      .catch((error) => {
        console.warn("Something when wrong, please check: ", error);
      })

  },[])

  function handleSubmit(event) {
    event.preventDefault()
    // submitToApi(formData)
  }

  return (
    <>
      <div className="Quizzical__Quiz">
        <form className="Quizzical__Form" onSubmit={handleSubmit}>
          {quizData.results.map((quiz) =>
            <div className="Quizzical__Form-Section" key={quizData.index}>
              <p className="Quizzical__Question">{quiz.question}</p>
              <div className="Quizzical__Answers-Wrapper">
                {quiz.incorrect_answers.map((answers) =>
                  <div className="Quizzical__Answers" key={answers.index}>
                    <input className="input-radio" value="adios" type="radio" name={quiz.question} id="Question_1" />
                    <label htmlFor="Question_1">{answers}</label>
                  </div>
              )}
              </div>
            </div>
          )}
          {/* end Quizzical__Form-Section */}
          <div className="Quizzical__Button-Group">
            <Button buttonText="check answer"/>
          </div>
        </form>
      </div>
    </>
  )
}
