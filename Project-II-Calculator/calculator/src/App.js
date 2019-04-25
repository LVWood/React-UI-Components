import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div>
      <CalculatorDisplay />
      <ActionButton text={"clear"} text={"/"} />
      <NumberButton text="7" text="8" text="9" text="x" />
      <NumberButton text="4" text="5" text="6" text="x" />
      <NumberButton text="1" text="2" text="3" text="x" />
      <ActionButton text={"0"} text={"="} />
    </div>
  );
};

export default App;
