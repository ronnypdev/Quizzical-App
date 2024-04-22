import { useState } from 'react';

export default function QuizQuestions() {
  return (
    <>
      <div className="Quizzical__Questions">
        <form className="Quizzical__Form" action="/">
          <div className="Quizzical__Form-Section">
            <p>How would one say goodbye in Spanish?</p>
            <ul className="Quizzical__Question-List">
              <li>
                <input type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">adios</label>
              </li>
              <li>
                <input type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">Hola</label>
              </li>
              <li>
                <input type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">Au Revoir</label>
              </li>
              <li>
                <input type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">Salir</label>
              </li>
            </ul>
          </div>
          {/* end Quizzical__Form-Section */}
          <div className="Quizzical__Form-Section">
            <p>Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?</p>
            <ul className="Quizzical__Question-List">
              <li>
                <input type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">adios</label>
              </li>
              <li>
                <input type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">Hola</label>
              </li>
              <li>
                <input type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">Au Revoir</label>
              </li>
              <li>
                <input type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">Salir</label>
              </li>
            </ul>
          </div>
          {/* end Quizzical__Form-Section */}
        </form>
      </div>
    </>
  )
}
