import React, { useState } from 'react'
import question from './assets/question';
import "./App.css"
const App = () => {
  const [questionIdx, setQuestionIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);


  const currQuestion = question[questionIdx]

  const selectOption = (idx) => {
    console.log(idx);
    if(currQuestion.answer === idx)
    {
      alert("Correct Answer");
      setScore(score+1);
    }
        else{
      alert("Wrong Answer")
    }

    const nextQ = questionIdx + 1;
    if(nextQ < question.length){
    setQuestionIdx(questionIdx + 1);
    }
    else {

      alert(" The Quiz is  Completed.... See ur Results..");
      setShowScore(true);
    }
  };
  
  const reset =() =>{
    setQuestionIdx(0);
    setScore(0);
    setShowScore(false);


  }
  return (
    
    <div className='quiz-container'>
      {
        showScore ? (
          <>
        <h1> Your Score is {score}</h1>
        <button onClick={reset} className='button'><b>Restart the Quiz</b></button>
        </>
        ) : (
          <div className='quiz-container__question'>
            <p>Online Quizz</p>
          <p>{currQuestion.question}</p>
          <div className='quiz-container__options'>
            <ul className='ul'>
              {currQuestion.options.map((option,i) =>{
                return (<li className='li'
                 onClick={() =>selectOption(i)}>
                {option}</li>
                );
              })}
            </ul>
          </div>
        </div>
        )
      }
      
    </div>
  );
}

export default App