import React from 'react';
import Navbar from '../components/Navbar';
import SalesHeader from '../components/SalesHeader'
import ProductRow from '../components/ProductRow'
import { Grid } from '@material-ui/core';
// import Cart from '../components/Cart';
// import CartItem from '../components/CartItem'
// import React, { useState, data } from 'react';

export default function Home(){
  // const [products] = useState(data);
	// const [cart, setCart] = useState([]);

	// const addItem = item => {
	// 	// add the given item to the cart
	// };
    return(
       <div>
          <Navbar/>

          <SalesHeader/>
          <Grid container direction="row">
          <Grid item xs={2} />
          <Grid item container direction="row" xs={8}>
          <ProductRow/>
          <Grid item xs={2} />
          </Grid>
          </Grid>

        </div>
    )}