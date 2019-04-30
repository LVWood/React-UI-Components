import React from 'react';
import './Button.css';

const ActionButtonOne = () => {
    return (
        <div className="action-panel">
            <button className="action-wide">clear</button>
            <button className="operator"><strong>/</strong></button>
        </div>
    )
}

export default ActionButtonOne;