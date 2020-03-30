import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MediaCard from './components/Card';
import { Grid } from '@material-ui/core';
import Home from './pages/Home'


function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
