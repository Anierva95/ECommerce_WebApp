import React from 'react';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Invoice from './pages/Invoice';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";


function App() {
  return (
    <Router>
      <div className="App">
        <StoreProvider>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/invoice" component={Invoice} />
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
