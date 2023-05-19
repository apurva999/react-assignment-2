import "./Quiz.css"
import { QuizData } from "../QuizData"
import {useEffect, useState} from 'react';


function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [isPassed, setIsPassed] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [timer, setTimer] = useState(30); 
  
    useEffect(() => {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
  
      if (timer === 0) {
        clearInterval(countdown);
        submitTest();
      }
  
      return () => clearInterval(countdown);
    }, [timer]);
  
    const handleNextQuestion = () => {
  
      if (selectedOption ===QuizData[currentQuestion].answer) {
        setScore((prevScore) => prevScore + 2);
      }
  
      setSelectedOption('');
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    };
  
    const handleSubmitTest = () => {
  
      if (selectedOption ===QuizData[currentQuestion].answer) {
        setScore((prevScore) => prevScore + 2);
      }
  
      setIsFinished(true);
    };
  
    const submitTest = () => {
      setIsFinished(true);
    };
  
    const restartTest = () => {
      setCurrentQuestion(0);
      setSelectedOption('');
      setScore(0);
      setIsPassed(false);
      setIsFinished(false);
      setTimer(30);
    };
  
    useEffect(() => {
      if (score >= 12) {
        setIsPassed(true);
      }
    }, [score]);
  
    if (isFinished) {
      if (isPassed) {
        return (
          <div>
            <h1>Congratulations!</h1>
            <p>You have passed the test.</p>
            <p>score:{score}</p>
          </div>
        );
      }
  
      return (
        <div>
          <h1>Test Failed</h1>
          <button onClick={restartTest}>Restart Test</button>
          <p>Score:{score}</p>
        </div>
      );
    }
  
 
  return (
    <div>
        <p className="heading">Quiz APP</p>
        <h1>{timer}</h1>
        <div className="container">
            
            <div className="question">
                <span id="ques-num">{currentQuestion+1} </span>
                <span id="question-txt">{QuizData[currentQuestion].question}</span>
            </div>
            <div className="option-container">
                {QuizData[currentQuestion].options.map((option,i)=>{
                    return(
                        <button 
                        className={`btnHover ${
                            selectedOption === i+1?"checked":null
                        }`}
                        key={i}
                        onClick={()=>setSelectedOption(i+1)}
                        >
                        {option}
                        </button>
                    )
                })}                
            </div>
            {currentQuestion<QuizData.length-1 ?(
               <input type="button" value="Next" id="next-btn" onClick={handleNextQuestion}/>
            ):(
                <input type="button" value="Submit" id="next-btn" onClick={handleSubmitTest}/>
            )
        }
          
        </div>
    </div>
  )
}

export default Quiz