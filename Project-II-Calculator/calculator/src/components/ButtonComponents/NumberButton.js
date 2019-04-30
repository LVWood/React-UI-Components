import React from 'react';

const NumberButton = props => {
    return (
        <div className="square-button-container">
            <div className="number-panel">
                <button className="number" onClick={() => props.input(7)}>7</button>
                <button className="number" onClick={() => props.input(8)}>8</button>
                <button className="number" onClick={() => props.input(9)}>9</button>
                <button className="operator" onClick={() => props.input()}>x</button>
            </div>
                <div className="number-panel">
                <button className="number" onClick={() => props.input(4)}>4</button>
                <button className="number" onClick={() => props.input(5)}>5</button>
                <button className="number" onClick={() => props.input(6)}>6</button>
                <button className="operator" onClick={() => props.input()}>--</button>
            </div>
            <div className="number-panel">
                <button className="number" onClick={() => props.input(1)}>1</button>
                <button className="number" onClick={() => props.input(2)}>2</button>
                <button className="number" onClick={() => props.input(3)}>3</button>
                <button className="operator" onClick={() => props.input()}>+</button>
            </div>
        </div>
    )
}

export default NumberButton;