import { useState } from 'react';

export default function Quizzical(props) {
  return (
    <>
      <div className="Quizzical h-full flex flex-row justify-center items-center">
        <div className="h-[32rem] w-[32rem]">
          {props.children}
        </div>
      </div>
    </>
  )
}
