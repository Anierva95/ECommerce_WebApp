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
  const auth0 = useContext(Auth0Context)
  // const [products] = useState(data);
	// const [cart, setCart] = useState([]);

	// const addItem = item => {
	// 	// add the given item to the cart
	// };
    return(
       <div>
          <Navbar/>

          <SalesHeader/>
          <Button variant="contained" color="primary" onClick={auth0.loginWithRedirect} className="button is-danger">
            Login
          </Button>
          <Grid container direction="row">
          <Grid item xs={2} />
          <Grid item container direction="row" xs={8}>
          <ProductRow/>


          <Grid item xs={2} />
          </Grid>
          </Grid>

        </div>
    )}