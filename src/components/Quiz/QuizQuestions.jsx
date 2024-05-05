import { useState, useEffect } from 'react';
import {decode} from 'html-entities';
import Button from '../Base/Button';

export default function QuizQuestions() {
  const [quizData, setQuizData] = useState({});

  const url = "https://opentdb.com/api.php?amount=5&category=31&difficulty=medium&type=multiple";

  // Fetch the data from the API
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setQuizData(data))
  },[])

  function handleSubmit(event) {
    event.preventDefault();
  }

  // console.log("responseCode : ", quizData.response_code);
  // console.log("results : ", quizData.results);

  return (
    <>
      <div className="Quizzical__Quiz">
        <form className="Quizzical__Form" onSubmit={handleSubmit}>
          {quizData.results?.map((quiz) =>
            <div className="Quizzical__Form-Section" key={quiz.correct_answer}>
              <p className="Quizzical__Question">{decode(quiz.question)}</p>
              <div className="Quizzical__Answers-Wrapper">
                {quiz.incorrect_answers?.map((answers, index) =>
                  <div className="Quizzical__Answers" key={index}>
                    <input className="input-radio" value={quiz.correct_answer} type="radio" name={quiz.difficulty} id={quiz.question}  />
                    <label htmlFor={quiz.question}>{answers}</label>
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
