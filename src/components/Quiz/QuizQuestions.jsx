import { useState, useEffect } from 'react';
import { decode } from 'html-entities';
import { nanoid } from 'nanoid';
import Button from '../Base/Button';

export default function QuizQuestions() {
  const [quizData, setQuizData] = useState([]);
  const [score, setScore] = useState(0);
  const [showResults, setShowResutls] = useState(false)

  const url = "https://opentdb.com/api.php?amount=5&category=31&difficulty=medium&type=multiple";

  // function that shuffles an Array
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
            id: nanoid(),
            correctAnswer: decode(question.correct_answer),
            quizQuestion: decode(question.question),
            allShuffleAnswers: question.allAnswers,
            selectedAnswer: ''
          }
       })
        setQuizData(apiResults)
      })
  }, [])

  function handleChange(event) {
    const { value, dataset } = event.target
    setQuizData(prevQuizData => (
      prevQuizData.map((quiz) => quiz.id === dataset.questionId ? {...quiz, selectedAnswer: value} : quiz)
    ))
  }

  // console.log("quizData : ", quizData)

  // function getUserAnswers() {
  //   quizData.map((quiz) => {
  //     console.log("allAnswers: ", quiz.allShuffleAnswers)
  //     if (quiz.selectedAnswer === quiz.correctAnswer) {
  //       console.log("correct-answer")
  //       return 'correct-answer'
  //     } else if (quiz.selectedAnswer !== quiz.correctAnswer && quiz.selectedAnswer === quiz.allShuffleAnswers) {
  //       console.log("wrong-answer")
  //       return 'wrong-answer'
  //     } else {
  //       console.log("disable-answer")
  //       return 'disable-answer'
  //     }
  //   })
  // }

  function submitQuizData(event) {
    event.preventDefault();
    // getUserAnswers()
  }

  const generateKey = (item, index) => `${item}-${index}`;

  return (
    <>
      <div className="Quizzical__Quiz">
        <form className="Quizzical__Form" onSubmit={submitQuizData}>
          {quizData?.map((quiz) =>
            <div className="Quizzical__Form-Section" key={quiz.id}>
              <p className="Quizzical__Question">{quiz.quizQuestion}</p>
              <div className="Quizzical__Answers-Wrapper">
                {quiz.allShuffleAnswers?.map((answers, index) =>
                  <div className="Quizzical__Answers" key={generateKey(quiz, index)}>
                    <input
                      className="input-radio"
                      id={`${quiz.id}-${index}`}
                      data-question-id={`${quiz.id}`}
                      type="radio"
                      onChange={handleChange}
                      name={quiz.id}
                      value={answers}
                      checked={quiz.selectedAnswer === answers}
                      disabled={showResults}
                    />
                    <label htmlFor={`${quiz.id}-${index}`}>{decode(answers)}</label>
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
