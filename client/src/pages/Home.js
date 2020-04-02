import React, {useContext} from 'react';
import Navbar from '../components/Navbar';
import SalesHeader from '../components/SalesHeader'
import ProductRow from '../components/ProductRow'
import { Grid } from '@material-ui/core';
import { Auth0Context } from '../utils/auth0context';
import Button from '@material-ui/core/Button';

// import Cart from '../components/Cart';
// import CartItem from '../components/CartItem'
// import React, { useState, data } from 'react';

export default function Home(){
  const { isLoading, user, loginWithRedirect, logout } = useContext(Auth0Context);
  // const [products] = useState(data);
	// const [cart, setCart] = useState([]);

	// const addItem = item => {
	// 	// add the given item to the cart
	// };
    return(
       <div>
          <Navbar/>

          <SalesHeader/>

          {!isLoading && !user && (
            <>
            <Button variant="contained" color="primary" onClick={loginWithRedirect}>
                  Login
          </Button>
          </>

          )}
            {!isLoading && user && (
            <>
              <h1>Welcome!</h1>
              <p>Hello {user.name}</p>

              {user.picture && <img src={user.picture} alt="My Avatar" />}
              <Button variant="contained" color="primary" onClick={logout}>
                  Logout
          </Button>
              
            </>
          )}
          <Grid container direction="row">
          <Grid item xs={2} />
          <Grid item container direction="row" xs={8}>
          <ProductRow/>


          <Grid item xs={2} />
          </Grid>
          </Grid>

        </div>
    )}