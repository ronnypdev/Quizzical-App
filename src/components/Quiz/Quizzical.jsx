import { useState } from 'react';

export default function Quizzical(props) {
  return (
    <>
      <div className="h-full flex flex-row justify-center items-center">
        <div className="container bg-baby-blue-dark flex flex-row justify-center items-center">
            {props.children}
        </div>
      </div>
    </>
  )
}
