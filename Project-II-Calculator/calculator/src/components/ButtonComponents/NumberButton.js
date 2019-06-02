import React from 'react';
import './Button.css';


const numberButtons = [
    {
        type: "numButton", buttonStyle: "num button", text: "1"
    },
    {
        type: "numButton", buttonStyle: "num button", text: "2"
    },
    {
        type: "numButton", buttonStyle: "num button", text: "3"
    },
    {
        type: "numButton", buttonStyle: "num button", text: "4"
    },
    {
        type: "numButton", buttonStyle: "num button", text: "5"
    },
    {
        type: "numButton", buttonStyle: "num button", text: "6"
    },
    {
        type: "numButton", buttonStyle: "num button", text: "7"
    },
    {
        type: "numButton", buttonStyle: "num button", text: "8"
    },
    {
        type: "numButton", buttonStyle: "num button", text: "9"
    },
    {
        type: "numButton", buttonStyle: "operation button", text: "/"
    },
    {
        type: "numButton", buttonStyle: "operation button", text: "*"
    },
    {
        type: "numButton", buttonStyle: "operation button", text: "-"
    },
    {
        type: "numButton", buttonStyle: "operation button", text: "+"
    },
    {
        type: "numButton", buttonStyle: "operation button", text: "="
    },

];

function numButtons() {
    return (
        <div>
            {numberButtons.map(display => {
                return <NumberButtons numDisp={display} />
            })}
        </div>
    )
}

function NumberButtons(props) {
    return (
        <div>
            <button>{props.numDisp.text}</button>
        </div>
    )
};


export default NumberButtons;