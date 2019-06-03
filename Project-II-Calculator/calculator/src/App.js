import React from 'react';
import './App.css';
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const App = () => {
  return (
    <div className="App">
      <CalculatorDisplay />
      <ButtonRowContainer> 
        <ActionButton text="clear" className="clearButton" />
        <NumberButton  text="/" className="symbol"/>
      </ButtonRowContainer>
      <ButtonRowContainer>
        <NumberButton text="7" className="numButton"/>
        <NumberButton text="8" className="numButton"/>
        <NumberButton text="9" className="numButton"/>
        <NumberButton text="X" className="symbol"/>
      </ButtonRowContainer>
      <ButtonRowContainer>
        <NumberButton text="4" className="numButton"/>
        <NumberButton text="5" className="numButton"/>
        <NumberButton text="6" className="numButton"/>
        <NumberButton text="-" className="symbol"/>
      </ButtonRowContainer>
      <ButtonRowContainer>
        <NumberButton text="1" className="numButton"/>
        <NumberButton text="2" className="numButton"/>
        <NumberButton text="3" className="numButton"/>
        <NumberButton text="+" className="symbol"/>
      </ButtonRowContainer>
      <ButtonRowContainer> 
        <ActionButton text="0" className="zero"/>
        <NumberButton text="=" className="symbol"/>
      </ButtonRowContainer>
 
    </div>
  );
};

export default App;


{/* <button className={props.buttonStyle}>{props.text}</button> */}
/*  Structure for my calculator

    <CalculatorDisplay />
    <ButtonRowContainer> 
      <ActionButton />
      <NumberButton />
    </ButtonRowContainer>
    <ButtonRowContainer>
      <NumberButton />
    </ButtonRowContainer>


*/