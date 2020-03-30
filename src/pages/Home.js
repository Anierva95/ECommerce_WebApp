import React from 'react';
import Navbar from '../components/Navbar';
import MediaCard from '../components/Card';
import SalesHeader from '../components/SalesHeader'
import ProductRow from '../components/ProductRow'
import { Grid } from '@material-ui/core';

export default function Home(){


    return(
       <div>
<Navbar/>
<SalesHeader/>
<ProductRow/>
<Grid container direction="row">
<Grid item xs={2}></Grid>
  <Grid item={true} xs={2}>
    <MediaCard/>
    </Grid>
    <Grid item xs={2}>
    <MediaCard/>
    </Grid>
    <Grid item xs={2}>
    <MediaCard/>
    </Grid>
    <Grid item xs={2}>
    <MediaCard/>
    </Grid>
  </Grid>      
<Grid item xs={2}></Grid>

  <Grid container direction="row">
<Grid item xs={2}></Grid>
  <Grid item={true} xs={2}>
    <MediaCard/>
    </Grid>
    <Grid item xs={2}>
    <MediaCard/>
    </Grid>
    <Grid item xs={2}>
    <MediaCard/>
    </Grid>
    <Grid item xs={2}>
    <MediaCard/>
    </Grid>
  </Grid>      
<Grid item xs={2}></Grid>

<Grid container direction="row">
<Grid item xs={2}></Grid>
  <Grid item={true} xs={2}>
    <MediaCard/>
    </Grid>
    <Grid item xs={2}>
    <MediaCard/>
    </Grid>
    <Grid item xs={2}>
    <MediaCard/>
    </Grid>
    <Grid item xs={2}>
    <MediaCard/>
    </Grid>
  </Grid>      
<Grid item xs={2}></Grid>
</div>
    )}