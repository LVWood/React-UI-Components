import React from 'react';
import './Button.css';

// const NumButton = [
//     <button className="number-button" >1</button>
//     <button className="number-button" >2</button>
//     <button className="number-button" >3</button>
//     <button className="number-button" >4</button>
//     <button className="number-button" >5</button>
//     <button className="number-button" >6</button>
//     <button className="number-button" >7</button>
//     <button className="number-button" >8</button>
//     <button className="number-button" >9</button>
// ]

const NumButton = <button>{}</button>
const OpButton = <button>{}</button>

const NumberButton = props => {
    return (
        <div>
            <button className="number-button">{NumButton.props.text}</button>
            <button className="number-button">{NumButton.props.text}</button>
            <button className="number-button">{NumButton.props.text}</button>
            <button className="operator-button">{OpButton.props.text}</button>
        </div>
    )
    
};

export default NumberButton;