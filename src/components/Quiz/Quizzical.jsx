import { useState } from 'react';

export default function Quizzical(props) {
  return (
    <>
      <div className="Quizzical">
        <div className="Quizzical__container">
            {props.children}
        </div>
      </div>
    </>
  )
}
