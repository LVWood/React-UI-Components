import React from 'react';

const ActionButtonOne = props => {
    return (
        <div className="action-panel">
            <button className="action-wide" onClick={props.clear}>clear</button>
            <button className="operator"><strong>/</strong></button>
        </div>
    )
}

export default ActionButtonOne;