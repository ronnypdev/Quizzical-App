import { useState } from 'react';

export default function QuizQuestions() {
  return (
    <>
      <div className="Quizzical__Quiz">
        <form className="Quizzical__Form" action="/">
          <div className="Quizzical__Form-Section">
            <p className="Quizzical__Question">How would one say goodbye in Spanish?</p>
              <div className="Quizzical__Answers">
                <input type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">adios</label>
              </div>
              <div className="Quizzical__Answers">
                <input type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">Hola</label>
              </div>
              <div className="Quizzical__Answers">
                <input type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">Au Revoir</label>
              </div>
              <div className="Quizzical__Answers">
                <input type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">Sal</label>
              </div>
          </div>
          {/* end Quizzical__Form-Section */}
          <div className="Quizzical__Form-Section">
            <p className="Quizzical__Question">Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?</p>
              <div className="Quizzical__Answers">
                <input type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">Cabbage Patch Kids</label>
              </div>
              <div className="Quizzical__Answers">
                <input type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">Transformers</label>
              </div>
              <div className="Quizzical__Answers">
                <input type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">Care Bears</label>
              </div>
              <div className="Quizzical__Answers">
                <input type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">Rubik’s Cube</label>
              </div>
          </div>
          {/* end Quizzical__Form-Section */}
          <div className="Quizzical__Form-Section">
            <p className="Quizzical__Question">What is the hottest planet in our Solar System?</p>
              <div className="Quizzical__Answers">
                <input type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">Mercury</label>
              </div>
              <div className="Quizzical__Answers">
                <input type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">Venus</label>
              </div>
              <div className="Quizzical__Answers">
                <input type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">Mars</label>
              </div>
              <div className="Quizzical__Answers">
                <input type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">Saturn</label>
              </div>
          </div>
          {/* end Quizzical__Form-Section */}
          <div className="Quizzical__Form-Section">
            <p className="Quizzical__Question">In which country was the caesar salad invented?</p>
              <div className="Quizzical__Answers">
                <input type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">Italy</label>
              </div>
              <div className="Quizzical__Answers">
                <input type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">Portugal</label>
              </div>
              <div className="Quizzical__Answers">
                <input type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">Mexico</label>
              </div>
              <div className="Quizzical__Answers">
                <input type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">France</label>
              </div>
          </div>
          {/* end Quizzical__Form-Section */}
          <div className="Quizzical__Form-Section">
            <p className="Quizzical__Question">How Many Hearts Does An Octopus Have?</p>
              <div className="Quizzical__Answers">
                <input type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">One</label>
              </div>
              <div className="Quizzical__Answers">
                <input type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">Two</label>
              </div>
              <div className="Quizzical__Answers">
                <input type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">Three</label>
              </div>
              <div className="Quizzical__Answers">
                <input type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">Four</label>
              </div>
          </div>
          {/* end Quizzical__Form-Section */}
          <input className="button-submit" type="submit" value="submit" />
        </form>
      </div>
    </>
  )
}
