import { useState, useEffect } from 'react';
import { decode } from 'html-entities';
import { nanoid } from 'nanoid'
import Button from '../Base/Button';

export default function QuizQuestions() {
  const [quizData, setQuizData] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(false)
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
       const apiResults = data.results.map((question) => {
          question.allAnswers = [...question.incorrect_answers, question.correct_answer]
          question.allAnswers = shuffle(question.allAnswers)

          return {
            sectionId: nanoid(),
            correctAnswer: decode(question.correct_answer),
            quizQuestion: decode(question.question),
            allShuffleAnswers: question.allAnswers
          }
       })
        setQuizData(apiResults)
      })
  }, [])

  function handleChange(event) {
    const { value } = event.target
    setSelectedAnswer(value)
  }

  function submitQuizData(event) {
    event.preventDefault();
    const quizAnswers = quizData.map((answers) => answers.correctAnswer)

    if (selectedAnswer === quizAnswers) {
      console.log("color green")
    } else {
      console.log("wrong answer")
    }

  }

  return (
    <>
      <div className="Quizzical__Quiz">
        <form className="Quizzical__Form" onSubmit={submitQuizData}>
          {quizData?.map((quiz) =>
            <div className="Quizzical__Form-Section" key={quiz.sectionId}>
              <p className="Quizzical__Question">{quiz.quizQuestion}</p>
              <div className="Quizzical__Answers-Wrapper">
                {quiz.allShuffleAnswers?.map((answers, index) =>
                  <div className="Quizzical__Answers" key={index}>
                    <input
                      className="input-radio"
                      id={answers}
                      type="radio"
                      onChange={handleChange}
                      name={quiz.correctAnswer}
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
