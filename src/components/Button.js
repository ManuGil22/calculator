import React from 'react';
import '../stylesheets/Button.css'

function Button(props) {
    return (
        <div 
        className={`${props.double ? 'btn double-btn' : 'btn'}`} 
        onClick={() => props.handleClick(props.children)} >
            {props.children}
        </div>
    );
}

export default Button;