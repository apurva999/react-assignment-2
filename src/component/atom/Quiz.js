import "./Quiz.css"
import { QuizData } from "../QuizData"
import {useState} from 'react';


function Quiz() {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);
    
    const changeQuestion = ()=>{

        if(currentQuestion< QuizData.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true)
        }
    }

    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
    const updateScore=()=>{
        if(clickedOption===QuizData[currentQuestion].answer){
            setScore(score+1);
        }
    }
    if(showResult){
        return(
            <div>
                <h2>Test Result</h2>
                <p>Score:{score}/20</p>
                {score>=12 ? <p>Congratulations</p>:<button onClick={resetAll}>Restart Test</button>}
            </div>
        )
    }
 
  return (
    <div>
        <p className="heading">Quiz APP</p>
        <div className="container">
            
            <div className="question">
                <span id="ques-num">{currentQuestion+1}. </span>
                <span id="question-txt">{QuizData[currentQuestion].question}</span>
            </div>
            <div className="option-container">
                {QuizData[currentQuestion].options.map((option,i)=>{
                    return(
                        <button 
                        // className="option-btn"
                        className={`btnHover ${
                            clickedOption == i+1?"checked":null
                        }`}
                        key={i}
                        onClick={()=>setClickedOption(i+1)}
                        >
                        {option}
                        </button>
                    )
                })}                
            </div>
            {currentQuestion<QuizData.length-1 ?(
               <input type="button" value="Next" id="next-btn" onClick={changeQuestion}/>
            ):(
                <input type="button" value="Submit" id="next-btn" onClick={updateScore}/>
            )
        }
          
        </div>
    </div>
  )
}

export default Quiz