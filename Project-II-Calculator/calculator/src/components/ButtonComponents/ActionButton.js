import React from 'react';
import './Button.css';

const ActButton = <button>{}</button>;
const OpButton = <button>{}</button>;

const ActionButton = props => {
    return (
        <div>
            <button className="action-button">{ActButton.props.text}</button>
            <button className="operator-button">{OpButton.props.text}</button>
        </div>
    )
    
};

export default ActionButton;