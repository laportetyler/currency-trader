import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CurrencyInput from './components/CurrencyInput';
import CurrencyResult from './components/CurrencyResult';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
              <CurrencyInput/>
              <CurrencyResult/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
