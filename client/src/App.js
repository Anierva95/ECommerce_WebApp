import React from 'react';
import Home from './pages/Home';
import Blog from './pages/Blog';
import StoreManager from './pages/StoreManager';
import Cart from './pages/Cart'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";


function App() {
  return (
    <Router>
      <div className="App">
        <StoreProvider>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/storeManager" component={StoreManager} />
          <Route exact path="/cart" component={Cart} />
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
