import React from 'react';
import HeaderContainer from './components/HeaderContainer';
import CardContainer from './components/CardContainer';
import Footer from './components/Footer';
import './App.css';

const App =() => {
  return (
    <div className="App">
      <div className="lambda-card">
        <HeaderContainer />
        <CardContainer />
        <Footer />
      </div>
      
    </div>
  )
}

export default App;
