import { useState } from 'react';
import Button from '../Base/Button'

export default function StartQuiz() {
  return (
    <>
      <div className="h-[34.375rem] w-[34.375rem] bg-baby-blue-light flex flex-col justify-center items-center">
        <h1 className="text-2xl font-karla font-bold capitalize mb-3">Quizzical</h1>
        <p className="mb-7">Some description if needed</p>
        <Button buttonText="start quiz"/>
      </div>
    </>
  )
}
