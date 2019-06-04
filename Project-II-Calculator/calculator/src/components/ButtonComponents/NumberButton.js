import React from 'react';
import './Button.css';

// Number buttons only

const NumberButton = props => {
    return (
        <button className={props.className}><strong>{props.text}</strong></button>  
    );
};

export default NumberButton;