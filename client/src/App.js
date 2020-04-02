import React, {useContext} from 'react';
import Home from './pages/Home';
import Blog from './pages/Blog';
// import CheckoutPage from './pages/Checkoutpage'
import StoreManager from './pages/StoreManager';
import Cart from './pages/Cart'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";
import { Auth0Provider, Auth0Context } from './utils/auth0context';


function App() {
  const auth0 = useContext(Auth0Context); 
  return (
    <Router>
      <div className="App">
        <Auth0Provider>
        <StoreProvider>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/storeManager" component={StoreManager} />
          {/* <Route exact path="/CheckoutPage" component={CheckoutPage} /> */}
          <Route exact path="/cart" component={Cart} />
        </StoreProvider>
        </Auth0Provider>
      </div>
    </Router>
  );
}

export default App;
