import React, {useState} from 'react'

import data from "../data/config.json";
import Question from './Question';

const Quiz = () => {

    const questions = data.questions;

    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    
    const onNext = (id) => {
        if(id < questions.length){
            setCurrentQuestion(questions[id]); 
        }else{
            alert("You are on the last question");
        }
    }

    const onPrevious = (id) => {
        if(id > 1){
            setCurrentQuestion(questions[id-2]); 
        }else{
            alert("You are on the first question");

        }
    } 

    return (
        <>
            <Question question={currentQuestion} onNext={onNext} onPrevious={onPrevious}/>
        </>
    )
}

export default Quiz
