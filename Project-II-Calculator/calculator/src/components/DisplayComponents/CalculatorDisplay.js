import React from 'react';
import './Display.css';


const calculatorDisplay = [
    {
        type: "displaybutton", buttonStyle: "display", text: "0"
    }
]


function calcDisplay () {
   return ( 
   <div>
        {calculatorDisplay.map(display => {
            return <CalculatorDisplay calDisp={display} />
        })}
    </div>
   )
}

function CalculatorDisplay (props) {
    return (
        <div>
            <button>{props.calDisp.text}</button>
        </div>
    )
};


export default CalculatorDisplay;