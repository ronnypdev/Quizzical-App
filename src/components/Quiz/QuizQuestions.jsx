import { useState, useEffect } from 'react';
import { decode } from 'html-entities';
import { nanoid } from 'nanoid'
import Button from '../Base/Button';

export default function QuizQuestions() {
  const [quizData, setQuizData] = useState([]);
  const [answer, setAnswer] = useState(null)
  // let apiResults = null;

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
       const apiResults = data.results
        apiResults.map((question) => {
          question.allAnswers = [...question.incorrect_answers, question.correct_answer]
          question.allAnswers = shuffle(question.allAnswers)
          question.sectionId = nanoid()
        })

        setQuizData(apiResults)
      })
  }, [])

  function handleChange(event) {
    const { value } = event.target
    setAnswer(value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("form submitted")
  }

  return (
    <>
      <div className="Quizzical__Quiz">
        <form className="Quizzical__Form" onSubmit={handleSubmit}>
          {quizData?.map((quiz) =>
            <div className="Quizzical__Form-Section" key={quiz.sectionId}>
              <p className="Quizzical__Question">{decode(quiz.question)}</p>
              <div className="Quizzical__Answers-Wrapper">
                {quiz.allAnswers?.map((answers, index) =>
                  <div className="Quizzical__Answers" key={index}>
                    <input
                      className="input-radio"
                      id={answers}
                      type="radio"
                      onChange={handleChange}
                      name={quiz.correct_answer}
                      value={answers}
                    />
                    <label htmlFor={answers}>{decode(answers)}</label>
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
