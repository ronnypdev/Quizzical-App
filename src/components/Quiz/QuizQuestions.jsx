import { useState } from 'react';

export default function QuizQuestions() {
  return (
    <>
      <div className="Quizzical__Quiz">
        <form className="Quizzical__Form" action="/">
          <div className="Quizzical__Form-Section">
            <p className="Quizzical__Question">How would one say goodbye in Spanish?</p>
            <div className="Quizzical__Answers-Wrapper">
              <div className="Quizzical__Answers">
                <input className="input-radio" value="adios" type="radio" name="Question_1" id="Question_1" />
                <label htmlFor="Question_1">adios</label>
              </div>
              <div className="Quizzical__Answers">
                <input className="input-radio" value="Hola" type="radio" name="Question_2" id="Question_2" />
                <label htmlFor="Question_2">Hola</label>
              </div>
              <div className="Quizzical__Answers">
                <input className="input-radio" value="Au Revoir" type="radio" name="Question_3" id="Question_3" />
                <label htmlFor="Question_3">Au Revoir</label>
              </div>
              <div className="Quizzical__Answers">
                <input className="input-radio" value="Sal" type="radio" name="Question_4" id="Question_4" />
                <label htmlFor="Question_4">Sal</label>
              </div>
            </div>
          </div>
          {/* end Quizzical__Form-Section */}
          <div className="Quizzical__Form-Section">
            <p className="Quizzical__Question">Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?</p>
            <div className="Quizzical__Answers-Wrapper">
              <div className="Quizzical__Answers">
                <input className="input-radio" value="Cabbage Patch Kids" type="radio" name="Question_5" id="Question_5" />
                <label htmlFor="Question_5">Cabbage Patch Kids</label>
              </div>
              <div className="Quizzical__Answers">
                <input className="input-radio" value="Transformers" type="radio" name="Question_6" id="Question_6" />
                <label htmlFor="Question_6">Transformers</label>
              </div>
              <div className="Quizzical__Answers">
                <input className="input-radio" value="Care Bears"  type="radio" name="Question_7" id="Question_7" />
                <label htmlFor="Question_7">Care Bears</label>
              </div>
              <div className="Quizzical__Answers">
                <input className="input-radio" value="Rubik’s Cube"  type="radio" name="Question_8" id="Question_8" />
                <label htmlFor="Question_8">Rubik’s Cube</label>
              </div>
            </div>
          </div>
          {/* end Quizzical__Form-Section */}
          <div className="Quizzical__Form-Section">
            <p className="Quizzical__Question">What is the hottest planet in our Solar System?</p>
            <div className="Quizzical__Answers-Wrapper">
              <div className="Quizzical__Answers">
                <input className="input-radio" value="Mercury" type="radio" name="Question_9" id="Question_9" />
                <label htmlFor="Question_9">Mercury</label>
              </div>
              <div className="Quizzical__Answers">
                <input className="input-radio" value="Venus" type="radio" name="Question_10" id="Question_10" />
                <label htmlFor="Question_10">Venus</label>
              </div>
              <div className="Quizzical__Answers">
                <input className="input-radio" value="Mars" type="radio" name="Question_11" id="Question_11" />
                <label htmlFor="Question_11">Mars</label>
              </div>
              <div className="Quizzical__Answers">
                <input className="input-radio" value="Saturn" type="radio" name="Question_12" id="Question_12" />
                <label htmlFor="Question_12">Saturn</label>
              </div>
            </div>
          </div>
          {/* end Quizzical__Form-Section */}
          <div className="Quizzical__Form-Section">
            <p className="Quizzical__Question">In which country was the caesar salad invented?</p>
            <div className="Quizzical__Answers-Wrapper">
              <div className="Quizzical__Answers">
                <input className="input-radio" value="Italy" type="radio" name="Question_13" id="Question_13" />
                <label htmlFor="Question_13">Italy</label>
              </div>
              <div className="Quizzical__Answers">
                <input className="input-radio" value="Portugal" type="radio" name="Question_14" id="Question_14" />
                <label htmlFor="Question_14">Portugal</label>
              </div>
              <div className="Quizzical__Answers">
                <input className="input-radio" value="Mexico" type="radio" name="Question_15" id="Question_15" />
                <label htmlFor="Question_15">Mexico</label>
              </div>
              <div className="Quizzical__Answers">
                <input className="input-radio" value="France" type="radio" name="Question_16" id="Question_16" />
                <label htmlFor="Question_16">France</label>
              </div>
            </div>
          </div>
          {/* end Quizzical__Form-Section */}
          <div className="Quizzical__Form-Section">
            <p className="Quizzical__Question">How Many Hearts Does An Octopus Have?</p>
            <div className="Quizzical__Answers-Wrapper">
              <div className="Quizzical__Answers">
                <input className="input-radio" value="One" type="radio" name="Question_17" id="Question_17" />
                <label htmlFor="Question_17">One</label>
              </div>
              <div className="Quizzical__Answers">
                <input className="input-radio" value="Two" type="radio" name="Question_18" id="Question_18" />
                <label htmlFor="Question_18">Two</label>
              </div>
              <div className="Quizzical__Answers">
                <input className="input-radio" value="Three" type="radio" name="Question_19" id="Question_19" />
                <label htmlFor="Question_19">Three</label>
              </div>
              <div className="Quizzical__Answers">
                <input className="input-radio" value="Four" type="radio" name="Question_20" id="Question_20" />
                <label htmlFor="Question_20">Four</label>
              </div>
            </div>
          </div>
          {/* end Quizzical__Form-Section */}
          <div className="Quizzical__Button-Group">
            <input className="button button-submit" type="submit" value="check answer" />
          </div>
        </form>
      </div>
    </>
  )
}
