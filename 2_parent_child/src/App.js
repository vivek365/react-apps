import React from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './parent/Parent';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Parent></Parent>
    </div>
  );
}

export default App;
