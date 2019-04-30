import React from 'react';

const NumberButton = () => {
    return (
        <div className="square-button-container">
            <div className="number-panel">
                <button className="number">7</button>
                <button className="number">8</button>
                <button className="number">9</button>
                <button className="operator">x</button>
            </div>
                <div className="number-panel">
                <button className="number">4</button>
                <button className="number">5</button>
                <button className="number">6</button>
                <button className="operator">--</button>
            </div>
            <div className="number-panel">
                <button className="number">1</button>
                <button className="number">2</button>
                <button className="number">3</button>
                <button className="operator">+</button>
            </div>
        </div>
    )
}

export default NumberButton;