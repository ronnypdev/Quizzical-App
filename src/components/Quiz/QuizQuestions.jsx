import { useState, useEffect } from 'react';
import {decode} from 'html-entities';
import Button from '../Base/Button';

export default function QuizQuestions() {
  const [quizData, setQuizData] = useState([]);
  let apiResults = null;

  const url = "https://opentdb.com/api.php?amount=5&category=31&difficulty=medium&type=multiple";

// declare the function
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

  // Fetch the data from the API
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        apiResults = data.results
        apiResults.map((question) => {
          question.allAnswers = [...question.incorrect_answers, question.correct_answer]
          question.allAnswers = shuffle(question.allAnswers)
        })
        setQuizData(apiResults)
      })
  }, [])

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <div className="Quizzical__Quiz">
        <form className="Quizzical__Form" onSubmit={handleSubmit}>
          {quizData?.map((quiz) =>
            <div className="Quizzical__Form-Section" key={decode(quiz.correct_answer)}>
              <p className="Quizzical__Question">{decode(quiz.question)}</p>
              <div className="Quizzical__Answers-Wrapper">
                {quiz.allAnswers?.map((answers, index) =>
                  <div className="Quizzical__Answers" key={index}>
                    <input className="input-radio" value={decode(quiz.correct_answer)} type="radio" name={decode(quiz.correct_answer)} id={decode(answers)} />
                    <label htmlFor={decode(answers)}>{decode(answers)}</label>
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
