import { useState, useEffect } from 'react';
import {decode} from 'html-entities';
import Button from '../Base/Button';

export default function QuizQuestions() {
  const [quizData, setQuizData] = useState({});

  const url = "https://opentdb.com/api.php?amount=5&category=31&difficulty=medium&type=multiple";
  // const incorrectAnswers = quizData.results?.map((result) => console.log(result.incorrect_answers));
  // console.log("incorrectAnswers: ", incorrectAnswers);

  // const correctAnswers = quizData.results?.map((result) => result.correct_answer);
  // console.log("correctAnswers: ", correctAnswers);

  // Fetch the data from the API
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setQuizData(data.results))
  }, [])
  
    // Function to insert the correct_answer randomly into the incorrect answers array
  function shuffleAllAnswers(incorrectAnswers, correctAnswers) {
    // Generate a random index
    let randomIndex = Math.floor(Math.random() * (incorrectAnswers.length + 1));
    //Insert the item at the random index
    incorrectAnswers.splice(randomIndex, 0, correctAnswers)
  }


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
                {quiz.incorrect_answers?.map((answers, index) =>
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
