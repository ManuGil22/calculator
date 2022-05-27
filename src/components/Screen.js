import React from 'react';
import '../stylesheets/Screen.css'

function Screen ( { outputText } ){
    return (
        <div className='screen-container'>
            <span className='calculator-output'>{outputText}</span>
        </div>
    );
}

export default Screen;