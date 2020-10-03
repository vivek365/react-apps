import React from 'react';
import { Switch } from 'react-router-dom';
import logo from './logo.svg';
import AppRoutes from './AppRoutes';
import Navbar from './nav-bar/Navbar';
import './App.css'
function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <div style={{padding: '10px 100px'}}>
        <AppRoutes></AppRoutes>
      </div>
    </div>
  );
}

export default App;
