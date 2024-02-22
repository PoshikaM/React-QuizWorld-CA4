import React, { useState } from 'react'
import questions from '../questions';
import reactlogo from '../assets/reactlogo.png'
import Result from './Result';

function QuestionBox(){

  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState(false)
  const [highlight, sethighlight] = useState('green')
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false);

  // to change the theme 
  const togglTheme = () => {
    setTheme((prevTheme) => !prevTheme)

    const body = document.body;
    body.style.backgroundColor = theme ? "#4A0078" : "#5BC7E2"
    console.log(theme)
  }

  // to change color when clicking highlight
  const handleColor = () => {
    sethighlight('red')
  }

  // to rset color back when clicking remove highlight
  const resetColor = () => {
    sethighlight('green')
  }


// Function to check whether the clicked option is correct. If yes, increase the score by 1 and proceed to the next question.
  const handleOptionClick = (opt) => {
    const optionSelected = questions[count].options[opt];
    if(optionSelected.isCorrect){
      setScore((prevScore) => prevScore+1)
    }
    // calling the next question change function
    loadNextQuestion();
  }

  // function to change to next question
  const loadNextQuestion = () => {
    if(count<questions.length-1){
      setCount(count+1)
    }else{
      setQuizCompleted(true)
    }
  }

  
/*This component represents the main quiz interface. It handles the display of questions, user interactions, and theme changes.*/
  return (
    <div>
      <div id='container'>
        <div id='entirePage' className={theme ? 'lighttheme' : 'darktheme'}> {/* class to change the theme */}
            <div className='innerDiv'>

              {/* header part logo and quiz title */}
                <header className='header'>
                    <img src={reactlogo}/>
                    <h1>Quiz World</h1>
                </header>
                <div>
                    <div className='main'>
                      <div>

                        {/* for the main part */}
                        <div>
                          <button className='mode' onClick={togglTheme}>{theme ? 'Dark mode' : 'Light mode'}</button>
                          <h4>Question : {[count+1]} out of {questions.length}</h4>
                        </div>
                        <div>
                          <h2 style={{color : highlight}}>{questions[count].text}</h2>
                        </div>

                        {/* for the option buttons */}
                        <div>                       
                        <div className='btns1'>
                          {questions[count].options.map((option, index) => (
                            <button 
                              className={theme ? 'btnlighttheme' : 'btndarktheme'}
                              key={index}
                              onClick={() => {handleOptionClick(index)}}
                            >
                              {option.text}
                            </button>
                          ))}
                        </div>
                        </div>
                        
                        {/* for the highlight and remove highlight buttons */}
                        <div className='btns3'>
                          <button className={theme ? 'litthe' : 'darkthe'} onClick={handleColor} id='highlight'>Highlight</button>
                          <button className={theme ? 'litthe' : 'darkthe'} onClick={resetColor} id='removehigh'>Remove Highlight</button>
                        </div>

                        {/* if last question is completed i am calling the result component sending score and theme as props */}
                        {quizCompleted && (<Result score={score} theme={theme}/> )}

                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default  QuestionBox;