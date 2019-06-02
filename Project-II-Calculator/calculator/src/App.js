import React from 'react';
import './App.css';
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButtons from "./components/ButtonComponents/NumberButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const App = () => {
  return (
    <div className="App">
      <ActionButton />
      <NumberButtons />
      <CalculatorDisplay />
      
    </div>
  );
};

export default App;


{/* <button className={props.buttonStyle}>{props.text}</button> */}