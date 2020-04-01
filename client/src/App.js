import React from 'react';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Invoice from './pages/Invoice';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
    <Route exact path="/" component={Home} />
    <Route exact path="/blog" component={Blog} />
    <Route exact path="/invoice" component={Invoice} />
    </div>
    </Router>
  );
}

export default App;
