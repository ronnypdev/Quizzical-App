import { useState } from 'react';
import Button from '../Base/Button'

export default function StartQuiz() {
  return (
    <>
      <div className="Quizzical__start">
        <h1 className="Quizzical__title">Quizzical</h1>
        <p className="Quizzical__description">Some description if needed</p>
        <Button buttonText="start quiz"/>
      </div>
    </>
  )
}
