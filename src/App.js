import React from 'react';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog'
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
    <Route exact path="/" component={Home} />
    <Route exact path="/blog" component={Blog} />
    </div>
    </Router>
  );
}

export default App;
