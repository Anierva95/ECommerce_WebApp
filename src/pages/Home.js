import React from 'react';
import Navbar from '../components/Navbar';
import SalesHeader from '../components/SalesHeader'
import ProductRow from '../components/ProductRow'
import { Grid } from '@material-ui/core';

export default function Home(){


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