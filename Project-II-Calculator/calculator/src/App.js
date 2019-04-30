import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButtonOne from './components/ButtonComponents/ActionButton';
import ActionButtonTwo from './components/ButtonComponents/ActionButtonTwo';

const App = () => {
  return (
    <div className="calc-container">
      <div className="display">
        <CalculatorDisplay />
      </div>
      <div className="action-buttons">
        <ActionButtonOne />
      </div>
      <div className="num-button-container">
        <NumberButton />
      </div>
      <div className="action-buttons">
        <ActionButtonTwo />
      </div>      
    </div>
  );
};

export default App;
