import React from "react";
import {questionPropsType} from '../Types/quiz_Types';
import '../App.css';


const QuestionCard : React.FC<questionPropsType> = ({question,option,callBack}) => {
  return(
      <div>
    <h1>Quiz App</h1>

    <div>{question}</div>
  
    <form onSubmit={callBack} >
        
        {
            option.map((val:string, index:number)=>{
                return(
                <div key={index} >
                <label >
                    <input type="radio" value={val} name="option" />
                    {val}
                </label>
                </div>
                 )
            })
        }
        <input type="submit" />



    </form>


      </div>
  )
}

export default QuestionCard;