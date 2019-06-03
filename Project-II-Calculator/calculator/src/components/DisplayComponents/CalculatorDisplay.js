import React from 'react';
import './Display.css';


const CalculatorDisplay = props => {
    return (
        <button className={props.className}>
            {props.text}
        </button>
    );
}

export default CalculatorDisplay;