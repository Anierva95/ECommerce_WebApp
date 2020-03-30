import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MediaCard from './components/Card';
import { Grid } from '@material-ui/core';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Grid container direction="row">
    <Grid item xs={1}></Grid>
      <Grid item={true} xs={3}>
        <MediaCard/>
        </Grid>
        <Grid item xs={3}>
        <MediaCard/>
        </Grid>
      </Grid>
      <Grid item xs={2}></Grid>

      <Grid container direction="row">
    <Grid item xs={1}></Grid>
      <Grid item={true} xs={3}>
        <MediaCard/>
        </Grid>
        <Grid item xs={3}>
        <MediaCard/>
        </Grid>
      </Grid>      
    <Grid item xs={2}></Grid>

    <Grid container direction="row">
    <Grid item xs={1}></Grid>
      <Grid item={true} xs={3}>
        <MediaCard/>
        </Grid>
        <Grid item xs={3}>
        <MediaCard/>
        </Grid>
      </Grid>      
    <Grid item xs={2}></Grid>

    </div>
  );
}

export default App;
