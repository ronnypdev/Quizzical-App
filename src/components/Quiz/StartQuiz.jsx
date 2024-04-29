import { useState } from 'react';
import Button from '../Base/Button';

export default function StartQuiz(props) {
  const {startQuizScreen} = props
  return (
    <>
      <div className="Quizzical__start">
        <h1 className="Quizzical__title">Quizzical</h1>
        <p className="Quizzical__description">Test your Anime Expertise</p>
        <Button buttonCLick={startQuizScreen} buttonText="start quiz"/>
      </div>
    </>
  )
}
