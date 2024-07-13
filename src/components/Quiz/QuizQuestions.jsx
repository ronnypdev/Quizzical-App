import { useState, useEffect } from 'react';
import { decode } from 'html-entities';
import { nanoid } from 'nanoid';
import Button from '../Base/Button';

export default function QuizQuestions() {
  const [quizData, setQuizData] = useState([]);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      })
      .catch(error => {
        console.log("Connection error 🚫 please try again!", error)
        setLoading(false);
      });
  }, [])

  function getTotalScore() {
    let quizScore = 0
    quizData.map((quiz) => {
      if (quiz.correctAnswer === quiz.selectedAnswer) {
        quizScore++
      }
    })

    setScore(quizScore)
  }

  /**
   * handleChange function
   * keep tracks of user answer selection
   * and passes the user answer value
   * to the selectedAnswer property
   * @param {*} event
   */
  function handleChange(event) {
    const { value, dataset } = event.target
    setQuizData(prevQuizData => (
      prevQuizData.map((quiz) => quiz.id === dataset.questionId ? {...quiz, selectedAnswer: value} : quiz)
    ))
  }

  function highlightAnswers(selectedAnswer, correctAnswer, answers) {
    const answerSelection = selectedAnswer === answers;
    const isCorrect = selectedAnswer === correctAnswer;
    // const classes = {};

    if (showResults) {
      // return selectedAnswer === correctAnswer
      // ? "correct-answer"
      // : selectedAnswer !== correctAnswer && selectedAnswer === answers
      //   ? "wrong-answer"
      //   : "disable-answer";

      // if (answers === correctAnswer) {
      //     return "correct-answer";
      // } else if (answers === selectedAnswer) {
      //     return "wrong-answer";
      // } else {
      //     return"disable-answer";
      // }

      if (isCorrect) {
        return "correct-answer";
      } else if (answerSelection && !isCorrect) {
        return "wrong-answer"
      } else {
        return "disable-answer";
      }
    }
    // return classes;
  }

  function submitQuizData(event) {
    event.preventDefault();
    if (quizData.every(quiz => quiz.selectedAnswer !== "none")) {
      getTotalScore()
      setShowResutls(prevResults => !prevResults)
    }
  }

  function resetGame() {
    getTotalScore(0)
    setShowResutls(false)
    setQuizData([])

  }

  const generateKey = (item, index) => `${item}-${index}`;

  if (loading) {
    return <p className="score">Page is Loading... ⌛</p>;
  }

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
                    <label className={highlightAnswers(quiz.selectedAnswer, quiz.correctAnswer, answers)} htmlFor={`${quiz.id}-${index}`}>
                      {decode(answers)}
                    </label>
                  </div>
              )}
              </div>
            </div>
          )}
          {/* end Quizzical__Form-Section */}
          <div className="Quizzical__Button-Group">
            {showResults && <div className="display-results">
              <p className="score">You scored {score}/5 correct answers</p>
              <Button buttonCLick={resetGame} buttonText="Play Again!" />
            </div>}
            {!showResults && <Button buttonText="check answer" />}
          </div>
        </form>
      </div>
    </>
  )
}
