import React from 'react';

// Container for action and number buttons

const ButtonRowContainer = props => {
    return (
        <div className ={ButtonRowContainer}>
            {props.children}
        </div>
    );
};

export default ButtonRowContainer;