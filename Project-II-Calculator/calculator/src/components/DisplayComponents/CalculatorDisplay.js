import React from 'react';
import './Display.css';


const CalculatorDisplay = props => {
    return (
        <div className="display-panel">{props.total}{props.display}</div>
    )
}

export default CalculatorDisplay;