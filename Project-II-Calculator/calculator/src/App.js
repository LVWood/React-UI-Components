import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButtonOne from './components/ButtonComponents/ActionButton';
import ActionButtonTwo from './components/ButtonComponents/ActionButtonTwo';

// const App = () => {
//   return (
//     <div className="calc-container">
//       <div className="display">
//         <CalculatorDisplay />
//       </div>
//       <div className="action-buttons">
//         <ActionButtonOne />
//       </div>
//       <div className="num-button-container">
//         <NumberButton />
//       </div>
//       <div className="action-buttons">
//         <ActionButtonTwo />
//       </div>      
//     </div>
//   );
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayTotal: ""
  }
}


addInput = value => { 
  this.setState({displayTotal: this.state.displayTotal + value});
}

clickEqual = () => {
  this.setState({ displayTotal: Math.eval(this.state.displayTotal) });
}

clear = () => this.setState({displayTotal: ""});

  render() {
    return (
      <div className="calc-container">
        <div className="display">
          <CalculatorDisplay total={this.state.displayTotal}/>
        </div>
        <div className="action-buttons">
          <ActionButtonOne input={this.addInput} clear={this.clear}/>
        </div>
        <div className="num-button-container">
          <NumberButton input={this.addInput}/>
        </div>
        <div className="action-buttons">
          <ActionButtonTwo input={this.addInput} equals={this.clickEqual}/>
        </div>      
      </div>
    );
  };
}
  

export default App;
