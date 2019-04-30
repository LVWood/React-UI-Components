import React from 'react';

const ActionButtonTwo = props => {
    return (
        <div className="action-panel">
            <button className="action-wide" onClick={() => props.input(0)}>0</button>
            <button className="operator" onClick={() => props.clickEqual()}><strong>=</strong></button>
        </div>
    )
}

export default ActionButtonTwo;