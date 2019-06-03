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
        <NumberButton />
      </ButtonRowContainer>
      <ButtonRowContainer>
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <ActionButton />
      </ButtonRowContainer>
      <ButtonRowContainer>
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <ActionButton />
      </ButtonRowContainer>
      <ButtonRowContainer>
        <NumberButton />
        <NumberButton />
        <NumberButton />
        <ActionButton />
      </ButtonRowContainer>
      <ButtonRowContainer> 
        <ActionButton />
        <NumberButton />
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