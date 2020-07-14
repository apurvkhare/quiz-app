import React, {useState} from 'react'

const Question = ({question: {id, question, options, answer}, onNext, onPrevious}) => {

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const onNextClick = e => {
    e.preventDefault();
    onNext(id);
  }

  const onPrevClick = e => {
    e.preventDefault();
    onPrevious(id);
  }

  const checkAnswer = e => {
      e.preventDefault();
      if(selectedOption === answer){
        alert("Correct Answer");
      }else{
        alert("Wrong Answer")
      }
  }

  const showAnswer = e => {
    e.preventDefault();
    alert("Answer is : " +  answer);
  }

  const setSelected = e =>{
    setSelectedOption(e.target.value);
  }

    return (
        <form>
          <h1>{id}. {question}</h1>
          {/* <div><input type="radio" name="options" id="" value={options[0]} onChange={setSelected} checked/><label htmlFor={options[0]}>{options[0]}</label></div>
          <div><input type="radio" name="options" id="" value={options[1]} onChange={setSelected} /><label htmlFor={options[1]}>{options[1]}</label></div>
          <div><input type="radio" name="options" id="" value={options[2]} onChange={setSelected} /><label htmlFor={options[2]}>{options[2]}</label></div>
          <div><input type="radio" name="options" id="" value={options[3]} onChange={setSelected} /><label htmlFor={options[3]}>{options[3]}</label></div> */}
          {options.map(option => <div><input type="radio" name="options" id="" value={option} onChange={setSelected}/><label htmlFor={option}>{option}</label></div>)}
          <button onClick={onPrevClick}>Previous</button>
          <button onClick={checkAnswer}>Submit</button>
          <button onClick={onNextClick}>Next</button>
          <button onClick={showAnswer}>Show Answer</button>
        </form>
    )
}

export default Question;
