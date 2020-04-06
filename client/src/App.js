import React, {useContext} from 'react';
import Home from './pages/Home';
import Blog from './pages/Blog';
import StoreManager from './pages/StoreManager';
import Cart from './pages/Cart'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";
import { Auth0Provider, Auth0Context } from './utils/auth0context';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import UserAccount from './pages/UserAccount'



function App() {
  const auth0 = useContext(Auth0Context); 
  const stripePromise = loadStripe('pk_test_EyOvaQsKqUFV933zd4l0nmOK00ViQzudXV');
  return (
    <Router>
      <div className="App">
        <Elements stripe={stripePromise}>
        <Auth0Provider>
        <StoreProvider>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/storeManager" component={StoreManager} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/UserAccount" component={UserAccount}/>
        </StoreProvider>
        </Auth0Provider>
        </Elements>
      </div>
    </Router>
  );
}

export default App;
