import React from 'react';
import './Button.css';

// Clear and Zero button

const ActionButton = props => {
    return (
        <button className={props.className}>
            {props.text}
        </button>
    );
}

export default ActionButton;