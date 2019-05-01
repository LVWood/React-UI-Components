import React from 'react';
import './Display.css';
// import NumberButtons from './NumberButtons';


const CalculatorDisplay = props => {
    return (
        <div className="display-panel" >
            <p> {props.display} {props.input} </p>
        </div>
    )
}

export default CalculatorDisplay;