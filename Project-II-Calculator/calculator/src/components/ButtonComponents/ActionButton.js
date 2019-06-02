import React from 'react';
import './Button.css';


const actionButton = [
    {
        type: "ActionButton", buttonStyle: "action Button", text: "clear"
    },
    {
        type: "ActionButton", buttonStyle: "action Button", text: "0"
    },
    
]


function actButton() {
    return (
        <div>
            {actionButton.map(display => {
                return <ActionButton actDisp={display} />
            })}
        </div>
    )
}

function ActionButton(props) {
    return (
        <div>
            <button>{props.actDisp.text}</button>
        </div>
    )
};

export default ActionButton;