import React from 'react';
import logo from './logo.svg';
import HelloWorldFC from './hello-world-fc/HelloWorld';
import HelloWorldCC from './hello-world-cc/HelloWorld';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <HelloWorldFC name="Functional Component" />
      <HelloWorldCC name="Class Component" />
    </div>
  );
}

export default App;
