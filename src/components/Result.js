import React from "react";
import questions from "../questions";
import reactlogo from '../assets/reactlogo.png'

const Result = ({score, theme}) => {

  // function to restart the page
  const restartGame = () => {
    window.location.reload()
  }

  // actual result container
  return(
    <div className="modalpopup">
      <div className="modalcontent" id={theme ? 'lite' : 'drk'}>

        {/* header with quiz title and logo */}
        <header className='header'>
          <img src={reactlogo}/>
          <h1>Quiz World</h1>
        </header>
        
        {/* to show the result i.e score and percentage */}
        <h1 className="result">Final Results</h1>
        <h3 className="score">{score} out of 5 correct - {((score)/questions.length)*100}%</h3>
        <button onClick={restartGame} className="restart">Restart Game</button>

      </div>
    </div>
  )
}

export default Result;